// @ts-check
import { defineConfig } from 'astro/config';

// Endereço oficial ou de homologação/demonstração configurável por ambiente.
// Em ambiente local, se não definido, mantém undefined no astro config para não inventar domínio.
const siteUrl = process.env.SITE_URL || process.env.PUBLIC_SITE_URL || undefined;

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
});
