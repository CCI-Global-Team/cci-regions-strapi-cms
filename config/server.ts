export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  deepl: {
    apiKey: env('DEEPL_API_KEY'),
    endpoint: env('DEEPL_API_URL'),
  },
});
