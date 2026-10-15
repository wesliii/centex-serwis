import { bindings, defineConfig, defineWorker } from "cf/config";

export default defineConfig({
  worker: defineWorker({
    name: "centex-serwis",
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-09-29",
    compatibilityFlags: ["nodejs_compat"],
    assets: { notFoundHandling: "none" },
    domains: ["www.centex-serwis.pl", "centex-serwis.pl"],
    env: {
      ASSETS: bindings.assets(),
      IMAGES: bindings.images(),
      CONTACT_TO_EMAIL: bindings.text("warsztat@centex.pl"),
      NEXT_PUBLIC_SANITY_PROJECT_ID: bindings.text("9zq0catk"),
      NEXT_PUBLIC_TURNSTILE_SITE_KEY: bindings.text("0x4AAAAAAFKecTZtDWkd8tb4"),
    },
    observability: { logs: { enabled: true } },
  }),
});
