/**
 * event-detail controller
 */

import { factories } from '@strapi/strapi'
import type { Context } from 'koa';

export default factories.createCoreController('api::event-detail.event-detail', ({ strapi }) => ({
  async find(ctx: Context) {
    const response = await super.find(ctx);

    const faqs = await strapi.documents('api::faq.faq').findMany({
      status: 'published',
      filters: { resource: { $eq: 'event' } },
      sort: { position: 'asc' },
      fields: ['position', 'title', 'content'],
    });

    const data = response.data[0];

    if (data) {
      return {
        ...data,
        faqs: {
          ...data.faqs,
          data: faqs
        }
      }
    }
    else {
      return null
    }
  },
}));
