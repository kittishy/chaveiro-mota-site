import sharp from 'sharp';
import path from 'node:path';

const outPath = path.resolve('public', 'assets', 'images', 'og-image.jpg');
const width = 1200;
const height = 630;

const svgOverlay = Buffer.from(`
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .brand-box { fill: #F5C542; rx: 6px; }
      .brand-text-1 { font-family: 'Sora', 'Segoe UI', Arial, sans-serif; font-size: 26px; font-weight: 800; fill: #000000; letter-spacing: 2px; }
      .brand-text-2 { font-family: 'Sora', 'Segoe UI', Arial, sans-serif; font-size: 36px; font-weight: 800; fill: #000000; letter-spacing: 1px; }
      .tag { font-family: 'Inter', 'Segoe UI', Arial, sans-serif; font-size: 19px; font-weight: 700; fill: #F5C542; letter-spacing: 2px; text-transform: uppercase; }
      .title { font-family: 'Sora', 'Segoe UI', Arial, sans-serif; font-size: 52px; font-weight: 800; fill: #F8FAFC; letter-spacing: -1px; }
      .subtitle { font-family: 'Inter', 'Segoe UI', Arial, sans-serif; font-size: 25px; font-weight: 400; fill: #CBD5E1; }
      .phone-box { fill: #1D2732; stroke: #2A3849; stroke-width: 2px; rx: 8px; }
      .phone-label { font-family: 'Inter', 'Segoe UI', Arial, sans-serif; font-size: 15px; font-weight: 600; fill: #F5C542; text-transform: uppercase; letter-spacing: 1px; }
      .phone-number { font-family: 'Sora', 'Segoe UI', Arial, sans-serif; font-size: 32px; font-weight: 700; fill: #FFFFFF; }
      .address { font-family: 'Inter', 'Segoe UI', Arial, sans-serif; font-size: 19px; font-weight: 500; fill: #94A3B8; }
    </style>
  </defs>

  <rect width="100%" height="100%" fill="#111820"/>
  <line x1="80" y1="190" x2="1120" y2="190" stroke="#202C38" stroke-width="1.5" />

  <!-- Marca oficial em duas linhas preta sobre amarelo -->
  <g transform="translate(80, 65)">
    <rect class="brand-box" width="200" height="85"/>
    <text x="100" y="36" text-anchor="middle" class="brand-text-1">CHAVEIRO</text>
    <text x="100" y="72" text-anchor="middle" class="brand-text-2">MOTA</text>
  </g>

  <!-- Tag de localização e atendimento -->
  <g transform="translate(310, 100)">
    <text class="tag">JOINVILLE / SC • PLANTÃO 24 HORAS</text>
    <text y="34" class="address">Rua Agulhas Negras, 1530 — Jarivatuba</text>
  </g>

  <!-- Título principal factual -->
  <g transform="translate(80, 275)">
    <text class="title">Chaveiro 24 Horas em Joinville</text>
    <text y="65" class="subtitle">Abertura de veículos e residências, chaves automotivas</text>
    <text y="105" class="subtitle">e serviços de fechaduras com orçamento sem compromisso.</text>
  </g>

  <!-- Box de contato verificado -->
  <g transform="translate(80, 465)">
    <rect class="phone-box" width="460" height="95"/>
    <text x="30" y="38" class="phone-label">Atendimento e Plantão Emergencial</text>
    <text x="30" y="76" class="phone-number">(47) 99721-7584</text>
  </g>

  <g transform="translate(570, 508)">
    <text class="subtitle" font-size="20px">Loja física: Seg. a sex., 9h–12h e 14h–18h</text>
    <text y="32" class="address" font-size="18px">Atendimento no balcão e no local</text>
  </g>
</svg>
`);

async function createOgImage() {
  await sharp({
    create: {
      width,
      height,
      channels: 3,
      background: { r: 17, g: 24, b: 32 }
    }
  })
  .composite([
    { input: svgOverlay, top: 0, left: 0 }
  ])
  .jpeg({ quality: 92, mozjpeg: true })
  .toFile(outPath);

  console.log('og-image.jpg gerada com sucesso em', outPath);
}

createOgImage().catch(console.error);

