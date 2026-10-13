import { chromium } from "playwright";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const rootDir = path.resolve(import.meta.dirname, "..");
const distDir = path.join(rootDir, "dist");
const screenshotsDir = path.join(rootDir, "tests", "screenshots");

fs.mkdirSync(screenshotsDir, { recursive: true });

// Servidor HTTP estático para dist/ com suporte a rotas limpas
const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".mjs": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".xml": "application/xml",
  ".txt": "text/plain"
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split("?")[0];
  if (reqPath === "/") reqPath = "/index.html";
  else if (reqPath.endsWith("/")) reqPath = `${reqPath}index.html`;
  else if (!path.extname(reqPath)) {
    if (fs.existsSync(path.join(distDir, `${reqPath}.html`))) {
      reqPath = `${reqPath}.html`;
    } else if (fs.existsSync(path.join(distDir, reqPath, "index.html"))) {
      reqPath = `${reqPath}/index.html`;
    }
  }

  const filePath = path.join(distDir, reqPath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": contentType });
    fs.createReadStream(filePath).pipe(res);
  } else {
    const notFoundPath = path.join(distDir, "404.html");
    if (fs.existsSync(notFoundPath)) {
      res.writeHead(404, { "Content-Type": "text/html" });
      fs.createReadStream(notFoundPath).pipe(res);
    } else {
      res.writeHead(404);
      res.end("Not Found");
    }
  }
});

const PORT = 4329;
await new Promise((resolve) => server.listen(PORT, "127.0.0.1", resolve));
console.log(`Test server running at http://127.0.0.1:${PORT}`);

const viewports = [
  { name: "mobile-360", width: 360, height: 740 },
  { name: "mobile-390", width: 390, height: 844 },
  { name: "mobile-414", width: 414, height: 896 },
  { name: "mobile-landscape-844", width: 844, height: 390 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "desktop-1024", width: 1024, height: 768 },
  { name: "desktop-1440", width: 1440, height: 900 }
];

const results = {
  viewports: [],
  subpagesTested: [],
  consoleErrors: [],
  overflows: [],
  interactions: {},
  contrastChecks: [],
  assertions: []
};

// Resolução portável do caminho do navegador
const defaultWinChrome = "C:\\Users\\isand\\AppData\\Local\\ms-playwright\\chromium-1243\\chrome-win64\\chrome.exe";
const executablePath = process.env.PLAYWRIGHT_CHROME_PATH ||
  (fs.existsSync(defaultWinChrome) ? defaultWinChrome : undefined);

const launchOptions = { headless: true };
if (executablePath) {
  launchOptions.executablePath = executablePath;
}

const browser = await chromium.launch(launchOptions);

try {
  // 1. Testar todos os Viewports na Home
  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
      locale: "pt-BR"
    });

    const page = await context.newPage();
    const errors = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    page.on("pageerror", (err) => {
      errors.push(err.message);
    });

    await page.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: "networkidle" });

    // Aguardar fontes e rolar para decodificar todas as imagens
    await page.evaluate(async () => {
      await document.fonts.ready;
      await new Promise((resolve) => {
        let totalHeight = 0;
        const distance = 400;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;

          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            window.scrollTo(0, 0);
            resolve();
          }
        }, 60);
      });

      const images = Array.from(document.querySelectorAll("img"));
      await Promise.all(
        images.map((img) =>
          img.complete
            ? Promise.resolve()
            : Promise.race([
                new Promise((res) => {
                  img.onload = img.onerror = res;
                }),
                new Promise((res) => setTimeout(res, 500))
              ])
        )
      );
    });
    await page.waitForTimeout(300);

    // Medir overflow real sem depender de overflow-x hidden
    const overflowMetrics = await page.evaluate(() => {
      const scrollW = document.documentElement.scrollWidth;
      const clientW = document.documentElement.clientWidth;
      const innerW = window.innerWidth;
      return {
        scrollWidth: scrollW,
        clientWidth: clientW,
        innerWidth: innerW,
        hasOverflow: scrollW > clientW
      };
    });

    const screenshotPath = path.join(screenshotsDir, `${vp.name}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });

    results.viewports.push({
      ...vp,
      ...overflowMetrics,
      screenshot: screenshotPath,
      errorsCount: errors.length
    });

    if (errors.length > 0) {
      results.consoleErrors.push({ viewport: vp.name, errors });
    }

    if (overflowMetrics.hasOverflow) {
      results.overflows.push({ viewport: vp.name, ...overflowMetrics });
    }

    console.log(`Viewport ${vp.name} (${vp.width}x${vp.height}px): scrollWidth=${overflowMetrics.scrollWidth}, clientWidth=${overflowMetrics.clientWidth}, overflow=${overflowMetrics.hasOverflow ? "FAIL" : "OK"}`);

    // Teste rigoroso de acessibilidade do menu mobile em mobile-390
    if (vp.name === "mobile-390") {
      const menuBtn = page.locator("#btn-abrir-menu");
      const drawer = page.locator("#menu-lateral");
      const closeBtn = page.locator("#btn-fechar-menu");

      const backgroundIds = ["skip-link", "cabecalho", "conteudo-principal", "site-footer", "mobile-bottom-bar"];

      // Pré-abertura: elementos não devem ter inert
      const preInertCheck = await page.evaluate((ids) => {
        return ids.every((id) => {
          const el = document.getElementById(id);
          return el ? !el.hasAttribute("inert") : true;
        });
      }, backgroundIds);

      await menuBtn.click();
      const isOpen = await drawer.evaluate((el) => el.classList.contains("is-open"));
      const isCloseFocused = await closeBtn.evaluate((el) => document.activeElement === el);

      // Conferir inert nos irmãos
      const backgroundInertApplied = await page.evaluate((ids) => {
        return ids.every((id) => {
          const el = document.getElementById(id);
          return el ? el.hasAttribute("inert") : true;
        });
      }, backgroundIds);

      // Shift+Tab: contenção de foco
      await page.keyboard.down("Shift");
      await page.keyboard.press("Tab");
      await page.keyboard.up("Shift");

      const activeAfterShiftTab = await page.evaluate(() => {
        const active = document.activeElement;
        const drawerContent = document.querySelector(".mobile-drawer-content");
        return {
          insideDrawer: drawerContent ? drawerContent.contains(active) : false,
          tag: active?.tagName,
          text: active?.textContent?.trim().slice(0, 30)
        };
      });

      // Escape fecha e devolve o foco
      await page.keyboard.press("Escape");
      const isClosedAfterEsc = await drawer.evaluate((el) => !el.classList.contains("is-open"));
      const isMenuBtnFocused = await menuBtn.evaluate((el) => document.activeElement === el);

      const backgroundInertCleaned = await page.evaluate((ids) => {
        return ids.every((id) => {
          const el = document.getElementById(id);
          return el ? !el.hasAttribute("inert") : true;
        });
      }, backgroundIds);

      results.interactions.mobileMenu = {
        preInertClean: preInertCheck,
        opened: isOpen,
        closeButtonFocusedOnOpen: isCloseFocused,
        backgroundInertApplied,
        focusContainedOnShiftTab: activeAfterShiftTab.insideDrawer,
        closedWithEscape: isClosedAfterEsc,
        focusReturnedToOpener: isMenuBtnFocused,
        backgroundInertCleaned
      };
      console.log(`Mobile menu test: opened=${isOpen}, inertApplied=${backgroundInertApplied}, focusContained=${activeAfterShiftTab.insideDrawer}, closed=${isClosedAfterEsc}, inertCleaned=${backgroundInertCleaned}`);
    }

    // Teste de expansão do FAQ em desktop
    if (vp.name === "desktop-1440") {
      const firstFaq = page.locator("details.faq-item").first();
      await firstFaq.locator("summary").click();
      const faqOpen = await firstFaq.evaluate((el) => el.hasAttribute("open"));
      results.interactions.faqToggle = { opened: faqOpen };
      console.log(`FAQ toggle test: opened=${faqOpen}`);
    }

    await context.close();
  }

  // 2. Testar as 3 Subpáginas Comerciais de SEO em Mobile e Desktop
  const subpages = [
    { name: "chaveiro-automotivo-joinville", path: "/chaveiro-automotivo-joinville/" },
    { name: "chaveiro-residencial-joinville", path: "/chaveiro-residencial-joinville/" },
    { name: "copia-de-chaves-joinville", path: "/copia-de-chaves-joinville/" }
  ];

  for (const sp of subpages) {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await context.newPage();
    const res = await page.goto(`http://127.0.0.1:${PORT}${sp.path}`, { waitUntil: "networkidle" });
    const h1 = await page.locator("h1").textContent();

    const overflowMetrics = await page.evaluate(() => {
      const scrollW = document.documentElement.scrollWidth;
      const clientW = document.documentElement.clientWidth;
      return { scrollWidth: scrollW, clientWidth: clientW, hasOverflow: scrollW > clientW };
    });

    results.subpagesTested.push({
      route: sp.path,
      status: res.status(),
      h1: h1.trim(),
      ...overflowMetrics
    });

    console.log(`Subpage ${sp.name}: HTTP ${res.status()}, H1="${h1.trim()}", overflow=${overflowMetrics.hasOverflow ? "FAIL" : "OK"}`);
    await context.close();
  }

  // 3. Teste de Breakpoint Crossing com Drawer Aberto (390px -> 1024px)
  {
    console.log("Executando teste de transição de breakpoint com drawer aberto...");
    const context = await browser.newContext({ viewport: { width: 390, height: 844 }, locale: "pt-BR" });
    const page = await context.newPage();
    await page.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: "networkidle" });

    await page.locator("#btn-abrir-menu").click();
    const openBefore = await page.locator("#menu-lateral").evaluate((el) => el.classList.contains("is-open"));
    const bodyLockedBefore = await page.evaluate(() => document.body.classList.contains("menu-open"));

    // Redimensionar para largura de desktop
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.waitForTimeout(100);

    const checkAfterResize = await page.evaluate(() => {
      const drawer = document.getElementById("menu-lateral");
      const isDrawerOpen = drawer?.classList.contains("is-open");
      const isBodyLocked = document.body.classList.contains("menu-open");
      const mainInert = document.getElementById("conteudo-principal")?.hasAttribute("inert");
      const activeEl = document.activeElement;
      const validFocus = activeEl && !drawer?.contains(activeEl);

      return {
        drawerClosed: !isDrawerOpen,
        bodyUnlocked: !isBodyLocked,
        inertRemoved: !mainInert,
        validFocus: !!validFocus,
        activeTag: activeEl?.tagName
      };
    });

    results.assertions.push({
      test: "Drawer closes and cleans state on desktop breakpoint crossing",
      openedInitially: openBefore && bodyLockedBefore,
      ...checkAfterResize,
      passed: openBefore && checkAfterResize.drawerClosed && checkAfterResize.bodyUnlocked && checkAfterResize.inertRemoved
    });

    console.log(`Breakpoint crossing test: openedInitially=${openBefore}, closed=${checkAfterResize.drawerClosed}, bodyUnlocked=${checkAfterResize.bodyUnlocked}, inertRemoved=${checkAfterResize.inertRemoved}`);
    await context.close();
  }

  // 4. Medição Real de Contraste de Cores (WCAG 2.1)
  {
    console.log("Calculando contraste de cores real no DOM renderizado...");
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await context.newPage();
    await page.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: "networkidle" });

    const contrastEvaluations = await page.evaluate(() => {
      function parseRgb(colorStr) {
        const match = colorStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (!match) return [0, 0, 0];
        return [parseInt(match[1], 10), parseInt(match[2], 10), parseInt(match[3], 10)];
      }

      function getLuminance([r, g, b]) {
        const [lr, lg, lb] = [r, g, b].map((v) => {
          const val = v / 255;
          return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
        });
        return 0.2126 * lr + 0.7152 * lg + 0.0722 * lb;
      }

      function getContrastRatio(rgb1, rgb2) {
        const l1 = getLuminance(rgb1);
        const l2 = getLuminance(rgb2);
        const brightest = Math.max(l1, l2);
        const darkest = Math.min(l1, l2);
        return (brightest + 0.05) / (darkest + 0.05);
      }

      function getEffectiveBg(el) {
        let cur = el;
        while (cur && cur !== document.documentElement) {
          const style = window.getComputedStyle(cur);
          const bg = style.backgroundColor;
          if (bg && bg !== "transparent" && !bg.startsWith("rgba(0, 0, 0, 0)")) {
            return bg;
          }
          cur = cur.parentElement;
        }
        return "rgb(251, 251, 250)";
      }

      const elementsToCheck = [
        { selector: ".btn-primary", label: "Botão Primário Amarelo (Texto escuro sobre Amarelo)", minRatio: 4.5 },
        { selector: ".hero-title", label: "Título Hero (H1 claro sobre fundo carvão escuro)", minRatio: 3.0 },
        { selector: ".section-subtitle", label: "Texto Descritivo de Seção sobre fundo claro", minRatio: 4.5 },
        { selector: ".store-signature-heading", label: "Título Loja na Assinatura Amarela (Preto sobre Amarelo)", minRatio: 4.5 },
        { selector: ".btn-secondary-on-yellow", label: "Botão Secundário na Loja Amarela", minRatio: 4.5 },
        { selector: ".btn-outline-dark", label: "Botão Secundário Contorno Escuro em Serviços", minRatio: 4.5 },
        { selector: ".image-caption", label: "Legenda de Imagem Técnica (Texto claro sobre barra escura)", minRatio: 4.5 },
        { selector: ".nav-link", label: "Link de Navegação (Texto claro sobre cabeçalho escuro)", minRatio: 4.5 },
        { selector: ".footer-copy", label: "Rodapé Copyright sobre carvão escuro", minRatio: 4.5 }
      ];

      return elementsToCheck.map((item) => {
        const el = document.querySelector(item.selector);
        if (!el) {
          return { ...item, found: false, ratio: 0, passed: false };
        }
        const style = window.getComputedStyle(el);
        const fg = style.color;
        const bg = (item.selector === ".btn-primary") ? style.backgroundColor : getEffectiveBg(el);
        const ratio = parseFloat(getContrastRatio(parseRgb(fg), parseRgb(bg)).toFixed(2));
        return {
          ...item,
          found: true,
          fg,
          bg,
          ratio,
          passed: ratio >= item.minRatio
        };
      });
    });

    results.contrastChecks = contrastEvaluations;
    for (const check of contrastEvaluations) {
      console.log(`Contraste: ${check.label} -> ${check.ratio}:1 (Exigido: ${check.minRatio}:1) [${check.passed ? "PASS" : "FAIL"}]`);
    }
    await context.close();
  }

  // 5. Testar página 404 e retorno à home
  {
    const context = await browser.newContext();
    const page = await context.newPage();
    const response = await page.goto(`http://127.0.0.1:${PORT}/rota-inexistente`, { waitUntil: "networkidle" });
    const status404 = response.status();
    const has404Title = await page.title();
    
    // Testar link de voltar para home
    await page.locator('a[href="/"]').first().click();
    await page.waitForURL(`http://127.0.0.1:${PORT}/`);
    const homeH1 = await page.locator("h1").first().textContent();

    results.assertions.push({
      test: "404 Page and Return Navigation",
      status404: status404 === 404,
      title: has404Title,
      returnedToHome: homeH1.includes("Chaveiro") && homeH1.includes("Joinville"),
      passed: status404 === 404 && homeH1.includes("Chaveiro")
    });
    console.log(`404 Navigation test: HTTP 404=${status404 === 404}, returnHome=${homeH1.includes("Chaveiro")}`);
    await context.close();
  }

} finally {
  await browser.close();
  server.close();
}

console.log("\n--- RESUMO DE TESTE VISUAL & QA ---");
console.log(JSON.stringify(results, null, 2));

const menuPass = results.interactions.mobileMenu?.opened &&
                 results.interactions.mobileMenu?.backgroundInertApplied &&
                 results.interactions.mobileMenu?.focusContainedOnShiftTab &&
                 results.interactions.mobileMenu?.closedWithEscape &&
                 results.interactions.mobileMenu?.backgroundInertCleaned &&
                 results.interactions.mobileMenu?.focusReturnedToOpener;

const faqPass = results.interactions.faqToggle?.opened;

const contrastPass = results.contrastChecks.length > 0 &&
                     results.contrastChecks.every((c) => c.passed);

const assertionsPass = results.assertions.every((a) => a.passed);

const subpagesPass = results.subpagesTested.length === 3 &&
                     results.subpagesTested.every((sp) => sp.status === 200 && !sp.hasOverflow);

const allOk = results.overflows.length === 0 &&
              results.consoleErrors.length === 0 &&
              menuPass &&
              faqPass &&
              contrastPass &&
              assertionsPass &&
              subpagesPass;

if (!allOk) {
  console.error("FALHA NA VERIFICAÇÃO VISUAL, CONTRASTE, SUBPÁGINAS, INERT, FOCO OU 404!");
  process.exit(1);
} else {
  console.log("TODAS AS VERIFICAÇÕES DE VIEWPORT, SUBPÁGINAS, OVERFLOW, CONTRASTE, FOCO, INERT E 404 PASSARAM COM SUCESSO!");
}
