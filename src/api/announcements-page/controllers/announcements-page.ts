/**
 * announcements-page controller
 */

import { factories } from '@strapi/strapi'
import { Context } from 'koa'

export default factories.createCoreController('api::announcements-page.announcements-page', ({ strapi }) => ({
  async find(ctx: Context) {
    const response = await super.find(ctx);

    const now = new Date().toISOString();
    const announcements = await strapi.documents('api::announcement.announcement').findMany({
      status: 'published',
      // filters: {
      //   $and: [
      //     { publishAt: { $lte: now } },
      //     { expireAt: { $gte: now } },
      //   ],
      // },
      populate: '*',
    });


    return {
      ...response,
      data: {
        ...response?.data,
        announcements
      },
    };
  },
}));