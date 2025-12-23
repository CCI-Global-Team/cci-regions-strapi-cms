/**
 * deepl service
 */

import { factories } from '@strapi/strapi';
import axios from 'axios';

type DeepLConfig = {
  apiKey: string;
  endpoint: string;
};

export default factories.createCoreService('api::fixed-event.fixed-event', ({ strapi }) => ({
  async translate(text: string, source = 'EN', target = 'FR') {
    if (!text) return text; // handle empty fields

    const { apiKey, endpoint } = strapi.config.get('server.deepl') as DeepLConfig;

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
