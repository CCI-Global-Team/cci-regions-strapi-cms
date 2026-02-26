/**
 * give-page controller
 */

import { factories } from '@strapi/strapi';
import type { Context } from 'koa';

const mappedBankAccounts = (data: Record<any, any>) => (
  data.map(({ documentId, accountName, accountNumber, iban, paymentUrl, sortCode, locale, campus: { name }, paymentProcessor }) => ({
    documentId,
    name,
    accountName,
    accountNumber,
    iban,
    paymentUrl,
    sortCode,
    locale,
    paymentProcessor: {
      name: paymentProcessor.name,
      slug: paymentProcessor.slug,
      logo: paymentProcessor.icon?.url,
      currency: paymentProcessor.currency,
      symbol: paymentProcessor.symbol
    }
  }))
)

export default factories.createCoreController('api::give-page.give-page', ({ strapi }) => ({
  async find(ctx: Context) {
    const response = await super.find(ctx);

    const bankAccounts = await strapi.documents('api::bank-account.bank-account').findMany({
      status: 'published',
      populate: {
        campus: {
          populate: '*'
        },
        paymentProcessor: {
          populate: ['icon'],
        },
      },
      locale: response.data.locale
    });

    const mainBankAccounts = mappedBankAccounts(bankAccounts.filter((b) => b.type === 'main'))

    const otherBankAccounts = mappedBankAccounts(bankAccounts.filter((b) => (b.type !== 'main')))

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
        startGiving: {
          ...response.data.startGiving,
          accounts: mainBankAccounts
        },
        others: {
          ...response.data.others,
          accounts: otherBankAccounts
        },
        faqsSection: {
          ...response.data.faqsSection,
          faqs
        }
      },
    };
  },
}));