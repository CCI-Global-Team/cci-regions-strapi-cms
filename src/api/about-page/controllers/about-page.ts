/**
 * about-page controller
 */

import { factories } from '@strapi/strapi'
import type { Context } from 'koa';

export default factories.createCoreController('api::about-page.about-page', ({ strapi }) => ({
  async find(ctx: Context) {
    const response = await super.find(ctx);

    const pastors = await strapi.documents('api::pastor.pastor').findMany({
      sort: { order: 'asc' },
      populate: '*',
    });

    return {
      ...response,
      data: {
        ...response?.data,
        aboutPastors: {
          ...response?.data?.aboutPastors,
          pastors
        },
      },
    };
  },
}));
