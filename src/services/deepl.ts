import axios from 'axios';

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::deepl', ({ strapi }) => ({
  async translate(text: string, source = 'EN', target = 'FR') {
    if (!text) return text; // handle empty fields

    const { apiKey, endpoint } = strapi.config.get('server.deepl');

    const response = await axios.post(
      endpoint,
      new URLSearchParams({
        auth_key: apiKey,
        text,
        source_lang: source,
        target_lang: target,
      }).toString(),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }
    );

    return response.data.translations[0]?.text || text;
  },
}));
