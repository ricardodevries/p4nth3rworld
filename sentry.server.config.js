import * as Sentry from "@sentry/astro";

Sentry.init({
  dsn: import.meta.env.PUBLIC_ENV === "prod" ? import.meta.env.PUBLIC_SENTRY_DSN : "",
  tracesSampleRate: 1.0,
});
