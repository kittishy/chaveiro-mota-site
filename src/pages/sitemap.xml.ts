import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const siteOrigin = process.env.SITE_URL || process.env.PUBLIC_SITE_URL || "https://chaveiromota.com.br";
  const normalizedOrigin = siteOrigin.replace(/\/+$/, "");

  const pages = [
    "",
    "chaveiro-automotivo-joinville/",
    "chaveiro-residencial-joinville/",
    "copia-de-chaves-joinville/"
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${normalizedOrigin}/${page}</loc>
    <changefreq>monthly</changefreq>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};

