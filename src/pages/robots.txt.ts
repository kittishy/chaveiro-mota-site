import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const siteOrigin = process.env.SITE_URL || process.env.PUBLIC_SITE_URL;
  const isIndexingEnabled = process.env.ENABLE_INDEXING === "true";
  const isOfficial = Boolean(isIndexingEnabled && siteOrigin && !siteOrigin.includes("localhost") && !siteOrigin.includes("127.0.0.1"));
  const normalizedOrigin = siteOrigin ? siteOrigin.replace(/\/+$/, "") : "";

  // Em modo oficial, permite indexação e informa sitemap.
  // Em modo de demonstração/homologação/local, mantém disallow para proteger contra indexação indevida de staging.
  const robotsTxt = isOfficial
    ? `User-agent: *\nAllow: /\n\nSitemap: ${normalizedOrigin}/sitemap.xml\n`
    : `User-agent: *\nDisallow: /\n`;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};

