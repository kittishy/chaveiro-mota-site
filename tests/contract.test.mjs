import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const rootDir = path.resolve(import.meta.dirname, "..");
const distDir = path.join(rootDir, "dist");

const distHtmlPath = path.join(distDir, "index.html");
const distAutoPath = path.join(distDir, "chaveiro-automotivo-joinville", "index.html");
const distResPath = path.join(distDir, "chaveiro-residencial-joinville", "index.html");
const distKeysPath = path.join(distDir, "copia-de-chaves-joinville", "index.html");
const dist404Path = path.join(distDir, "404.html");
const sitemapPath = path.join(distDir, "sitemap.xml");
const robotsPath = path.join(distDir, "robots.txt");

test("Build verification: todas as 4 rotas comerciais, 404, sitemap e robots existem", () => {
  assert.ok(fs.existsSync(distHtmlPath), "dist/index.html deve existir");
  assert.ok(fs.existsSync(distAutoPath), "dist/chaveiro-automotivo-joinville/index.html deve existir");
  assert.ok(fs.existsSync(distResPath), "dist/chaveiro-residencial-joinville/index.html deve existir");
  assert.ok(fs.existsSync(distKeysPath), "dist/copia-de-chaves-joinville/index.html deve existir");
  assert.ok(fs.existsSync(dist404Path), "dist/404.html deve existir");
  assert.ok(fs.existsSync(sitemapPath), "dist/sitemap.xml deve existir");
  assert.ok(fs.existsSync(robotsPath), "dist/robots.txt deve existir");
});

test("Contrato factual: Telefones e WhatsApp normalizados em todas as páginas", () => {
  const pages = [distHtmlPath, distAutoPath, distResPath, distKeysPath];

  for (const pagePath of pages) {
    const html = fs.readFileSync(pagePath, "utf-8");

    // Telefone deve ser estritamente tel:+5547997217584
    assert.ok(
      html.includes('href="tel:+5547997217584"'),
      `${pagePath}: Deve conter links com tel:+5547997217584`
    );

    // WhatsApp deve apontar para 5547997217584
    assert.ok(
      html.includes("https://wa.me/5547997217584"),
      `${pagePath}: Deve conter links para https://wa.me/5547997217584`
    );

    // Não deve conter números concatenados incorretamente (ex: 5555)
    assert.ok(!html.includes("555547"), `${pagePath}: Não deve haver duplicação de DDI 55`);
  }
});

test("Contrato de endereço e Google Maps", () => {
  const pages = [distHtmlPath, distAutoPath, distResPath, distKeysPath];

  for (const pagePath of pages) {
    const html = fs.readFileSync(pagePath, "utf-8");

    assert.ok(html.includes("Rua Agulhas Negras, 1530"), "Deve conter o endereço correto");
    assert.ok(html.includes("Jarivatuba"), "Deve conter o bairro Jarivatuba");
    assert.ok(html.includes("Joinville"), "Deve conter a cidade Joinville");
  }

  const homeHtml = fs.readFileSync(distHtmlPath, "utf-8");
  assert.ok(
    homeHtml.includes("https://www.google.com/maps/search/?api=1&amp;query=Chaveiro+Mota") ||
    homeHtml.includes("https://www.google.com/maps/search/?api=1&query=Chaveiro+Mota"),
    "Home deve conter link oficial do Google Maps"
  );
});

test("Contrato de SEO e Metadados das 4 Rotas Comerciais (SEO-PESQUISA-CHAVEIRO-MOTA.md)", () => {
  // 1. Home
  const homeHtml = fs.readFileSync(distHtmlPath, "utf-8");
  assert.ok(
    homeHtml.includes("<title>Chaveiro 24 Horas em Joinville | Chaveiro Mota</title>"),
    "Title da Home deve bater com o plano SEO"
  );
  assert.ok(
    homeHtml.includes('name="description" content="Chaveiro Mota em Joinville: plantão 24 horas para aberturas, chaves automotivas e fechaduras. Loja no Jarivatuba. Ligue ou fale pelo WhatsApp."'),
    "Meta description da Home deve bater com o plano SEO"
  );
  const homeH1 = homeHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi);
  assert.equal(homeH1?.length, 1, "Home deve ter exatamente 1 H1");
  assert.ok(homeH1[0].includes("Chaveiro") && homeH1[0].includes("24 horas") && homeH1[0].includes("em Joinville"));

  // 2. Automotivo
  const autoHtml = fs.readFileSync(distAutoPath, "utf-8");
  assert.ok(
    autoHtml.includes("<title>Chaveiro Automotivo em Joinville | Chaveiro Mota</title>"),
    "Title Automotivo deve bater com o plano SEO"
  );
  assert.ok(
    autoHtml.includes('name="description" content="Abertura de veículos, chaves codificadas e de presença, controles e conserto de ignição em Joinville. Consulte o Chaveiro Mota pelo WhatsApp."'),
    "Meta description Automotivo deve bater com o plano SEO"
  );
  const autoH1 = autoHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi);
  assert.equal(autoH1?.length, 1, "Automotivo deve ter exatamente 1 H1");
  assert.ok(autoH1[0].includes("Chaveiro Automotivo em Joinville"));

  // 3. Residencial
  const resHtml = fs.readFileSync(distResPath, "utf-8");
  assert.ok(
    resHtml.includes("<title>Chaveiro Residencial em Joinville | Chaveiro Mota</title>"),
    "Title Residencial deve bater com o plano SEO"
  );
  assert.ok(
    resHtml.includes('name="description" content="Aberturas, troca de fechaduras, chaves residenciais, controles de portão e cofres em Joinville. Consulte o Chaveiro Mota sobre seu serviço."'),
    "Meta description Residencial deve bater com o plano SEO"
  );
  const resH1 = resHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi);
  assert.equal(resH1?.length, 1, "Residencial deve ter exatamente 1 H1");
  assert.ok(resH1[0].includes("Chaveiro Residencial em Joinville"));

  // 4. Cópias de Chaves
  const keysHtml = fs.readFileSync(distKeysPath, "utf-8");
  assert.ok(
    keysHtml.includes("<title>Cópia de Chaves em Joinville | Chaveiro Mota</title>"),
    "Title Cópia de Chaves deve bater com o plano SEO"
  );
  assert.ok(
    keysHtml.includes('name="description" content="Cópias de chaves simples, tetra, multiponto, pantográfica e canivete no Jarivatuba, Joinville. Confira endereço e horários da loja Chaveiro Mota."'),
    "Meta description Cópia de Chaves deve bater com o plano SEO"
  );
  const keysH1 = keysHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi);
  assert.equal(keysH1?.length, 1, "Cópia de Chaves deve ter exatamente 1 H1");
  assert.ok(keysH1[0].includes("Cópia de Chaves em Joinville"));

  // 5. 404
  const html404 = fs.readFileSync(dist404Path, "utf-8");
  assert.ok(
    html404.includes('name="robots" content="noindex, nofollow"'),
    "Página 404 deve manter noindex incondicional"
  );
});

test("Origem efetiva e metadados de publicação (cobre SITE_URL e PUBLIC_SITE_URL)", () => {
  const homeHtml = fs.readFileSync(distHtmlPath, "utf-8");
  const effectiveOrigin = process.env.SITE_URL || process.env.PUBLIC_SITE_URL;

  if (effectiveOrigin) {
    const isLocalhost = effectiveOrigin.includes("localhost") || effectiveOrigin.includes("127.0.0.1");
    if (!isLocalhost) {
      assert.ok(
        !homeHtml.includes("localhost:4321") && !homeHtml.includes("127.0.0.1"),
        "Em publicação oficial, não deve conter localhost ou 127.0.0.1 nos metadados"
      );
      assert.ok(
        homeHtml.includes(effectiveOrigin.replace(/\/+$/, "")),
        "Deve conter a origem configurada em SITE_URL ou PUBLIC_SITE_URL"
      );
    }
  } else {
    // Modo local / prévia: mantém noindex
    assert.ok(
      homeHtml.includes('name="robots" content="noindex, nofollow"'),
      "Modo staging/local deve ter noindex para proteção"
    );
  }
});

test("Contrato de Schema.org Locksmith e BreadcrumbList sem CEP ou PIX inventados", () => {
  const pages = [distHtmlPath, distAutoPath, distResPath, distKeysPath];

  for (const pagePath of pages) {
    const html = fs.readFileSync(pagePath, "utf-8");
    const schemaMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
    assert.ok(schemaMatch, `${pagePath}: Deve conter script ld+json`);

    const schema = JSON.parse(schemaMatch[1]);
    const locksmithSchema = Array.isArray(schema)
      ? schema.find((s) => s["@type"] === "Locksmith")
      : (schema["@type"] === "Locksmith" ? schema : undefined);

    assert.ok(locksmithSchema, `${pagePath}: Deve conter schema Locksmith`);
    assert.equal(locksmithSchema.telephone, "+5547997217584");
    assert.equal(locksmithSchema.address.addressLocality, "Joinville");
    assert.equal(locksmithSchema.address.postalCode, undefined, "Não deve conter CEP inventado");

    // Loja física de 9h às 18h
    const opens = locksmithSchema.openingHoursSpecification.map((s) => s.opens);
    assert.ok(opens.includes("09:00"), "Loja deve abrir às 09:00");
    const closes = locksmithSchema.openingHoursSpecification.map((s) => s.closes);
    assert.ok(closes.includes("18:00"), "Loja deve fechar às 18:00");
  }

  // Subpáginas devem conter BreadcrumbList
  const subpages = [distAutoPath, distResPath, distKeysPath];
  for (const pagePath of subpages) {
    const html = fs.readFileSync(pagePath, "utf-8");
    const schemaMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
    const schema = JSON.parse(schemaMatch[1]);
    const breadcrumbSchema = Array.isArray(schema)
      ? schema.find((s) => s["@type"] === "BreadcrumbList")
      : (schema["@type"] === "BreadcrumbList" ? schema : undefined);

    assert.ok(breadcrumbSchema, `${pagePath}: Subpágina deve conter BreadcrumbList no Schema.org`);
  }
});

test("Sitemap.xml e Robots.txt: consistência e exclusão de rotas de erro", () => {
  const sitemapContent = fs.readFileSync(sitemapPath, "utf-8");
  assert.ok(sitemapContent.includes("<urlset"), "Sitemap deve ser um urlset válido");
  assert.ok(sitemapContent.includes("chaveiro-automotivo-joinville/"), "Sitemap deve listar chaveiro-automotivo-joinville/");
  assert.ok(sitemapContent.includes("chaveiro-residencial-joinville/"), "Sitemap deve listar chaveiro-residencial-joinville/");
  assert.ok(sitemapContent.includes("copia-de-chaves-joinville/"), "Sitemap deve listar copia-de-chaves-joinville/");
  assert.ok(!sitemapContent.includes("404"), "Sitemap NUNCA deve conter a página 404");

  const robotsContent = fs.readFileSync(robotsPath, "utf-8");
  assert.ok(robotsContent.includes("User-agent: *"), "Robots deve conter User-agent: *");
});

test("Integridade de Ativos de Imagem do Conjunto Revisão Codex v2", () => {
  const publicDir = path.join(rootDir, "public");

  const expectedImages = [
    "/assets/images/hero-bancada-chaveiro.jpg",
    "/assets/images/hero-bancada-chaveiro.webp",
    "/assets/images/hero-bancada-chaveiro-1024w.webp",
    "/assets/images/automotivo-atendimento.jpg",
    "/assets/images/automotivo-atendimento.webp",
    "/assets/images/automotivo-atendimento-1024w.webp",
    "/assets/images/residencial-porta.jpg",
    "/assets/images/residencial-porta.webp",
    "/assets/images/residencial-porta-1024w.webp",
    "/assets/images/og-image.jpg",
    "/favicon.svg",
    "/favicon.ico"
  ];

  for (const imgPath of expectedImages) {
    const fullPath = path.join(publicDir, imgPath);
    assert.ok(
      fs.existsSync(fullPath),
      `Arquivo referenciado deve existir no disco: ${imgPath}`
    );
  }
});

test("Ausência de termos especulativos ou marcas de IA na interface", () => {
  const pages = [distHtmlPath, distAutoPath, distResPath, distKeysPath, dist404Path];

  const forbiddenWords = [
    "Lorem ipsum",
    "proposta comercial",
    "mockup",
    "desenvolvido por inteligência artificial",
    "site feito por ia",
    "gerado por ia"
  ];

  for (const pagePath of pages) {
    const html = fs.readFileSync(pagePath, "utf-8");
    for (const word of forbiddenWords) {
      assert.ok(
        !html.toLowerCase().includes(word.toLowerCase()),
        `${pagePath}: Não deve conter termo especulativo: "${word}"`
      );
    }
  }
});

test("Pedido guiado: labels, serviço obrigatório e WhatsApp configurado", () => {
  const html = fs.readFileSync(distHtmlPath, "utf-8");
  assert.ok(html.includes('id="quick-request-form"'), "Formulário de pedido deve existir");
  assert.ok(html.includes('for="request-service"'), "Seleção de serviço precisa de label");
  assert.ok(html.includes('name="servico" required'), "Serviço deve ser obrigatório");
  assert.ok(html.includes('name="bairro"'), "Bairro opcional deve existir");
  assert.ok(html.includes('name="detalhes"'), "Detalhes opcionais devem existir");
  assert.ok(html.includes('data-whatsapp-base="https://wa.me/5547997217584"'), "Destinatário deve ser o WhatsApp oficial");
  assert.ok(html.includes("Nenhuma informação é enviada por este site"), "Explicação de privacidade deve existir");
});

test("Prévia não deve liberar robôs antes da aprovação expressa", () => {
  const robots = fs.readFileSync(robotsPath, "utf-8");
  const html = fs.readFileSync(distHtmlPath, "utf-8");
  if (process.env.ENABLE_INDEXING !== "true") {
    assert.ok(robots.includes("Disallow: /"), "Robots da prévia deve bloquear indexação");
    assert.ok(html.includes('content="noindex, nofollow"'), "Metatag da prévia deve ser noindex");
  }
});
