/**
 * event-detail controller
 */

import { factories } from '@strapi/strapi'
import type { Context } from 'koa';

export default factories.createCoreController('api::event-detail.event-detail', ({ strapi }) => ({
  async find(ctx: Context) {
    const response = await super.find(ctx);
    const data = response.data[0];

    if (!data) return null;

    const faqs = await strapi.documents('api::faq.faq').findMany({
      status: 'published',
      filters: { resource: { $eq: 'event' } },
      sort: { position: 'asc' },
      populate: 'event_detail',
      fields: ['position', 'title', 'content'],
    });

    const eventDetailFaq = faqs
      .filter((faq) => data.documentId === faq.event_detail?.documentId)
      .map(({ documentId, position, title, content }) => ({
        documentId,
        position,
        title,
        content,
      }));

    return {
      ...data,
      faqsSection: {
        ...data.faqsSection,
        faqs: eventDetailFaq
      }
    }
  },
}));
