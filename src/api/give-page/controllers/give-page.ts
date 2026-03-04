/**
 * give-page controller
 */

import { factories } from '@strapi/strapi';
import type { Context } from 'koa';

const mappedGivingOptions = (data: Record<any, any>) => (
  data.map(({
    documentId,
    locale,
    order,
    name,
    type,
    isPrimary,
    accountName,
    accountNumber,
    iban,
    sortCode,
    swiftCode,
    routingNumber,
    actionValue,
    actionUrl,
    instructions,
    campus,
    bank,
    paymentProcessor
  }) => ({
    documentId,
    locale,
    order,
    name,
    campusName: campus?.name ?? null,
    type,
    isPrimary,
    accountName,
    accountNumber,
    iban,
    sortCode,
    swiftCode,
    routingNumber,
    actionValue,
    actionUrl,
    instructions,
    bank,
    paymentProcessor
  }))
)

export default factories.createCoreController('api::give-page.give-page', ({ strapi }) => ({
  async find(ctx: Context) {
    const response = await super.find(ctx);

    const options = await strapi.documents('api::giving-option.giving-option').findMany({
      status: 'published',
      populate: {
        campus: {
          populate: '*'
        },
        paymentProcessor: {
          fields: ['documentId', 'name', 'slug', 'currency', 'symbol', 'locale'],
          populate: ['logo'],
        },
        bank: {
          fields: ['documentId', 'name', 'slug', 'countryCode', 'locale'],
          populate: ['logo']
        }
      },
      locale: response.data.locale
    });

    const givingOptions = mappedGivingOptions(options)

    const faqs = await strapi.documents('api::faq.faq').findMany({
      status: 'published',
      filters: { resource: { $eq: 'give' } },
      sort: { position: 'asc' },
      fields: ['position', 'title', 'content', 'locale'],
      locale: response.data.locale
    });

    return {
      ...response,
      data: {
        ...response?.data,
        givingSection: {
          ...response.data.givingSection,
          givingOptions
        },
        faqsSection: {
          ...response.data.faqsSection,
          faqs
        }
      },
    };
  },
}));
