/**
 * connect-page controller
 */

import { factories } from '@strapi/strapi'
import type { Context } from 'koa';

export default factories.createCoreController('api::connect-page.connect-page', ({ strapi }) => ({
  async find(ctx: Context) {
    const response = await super.find(ctx);

    const pastors = await strapi.entityService.findMany('api::pastor.pastor', {
      filters: {
        meetingLink: {
          $notNull: true,
        },
      },
      sort: { order: 'asc' },
      populate: '*',
    });

    return {
      ...response,
      data: {
        ...response?.data,
        ourPastors: {
          ...response?.data?.ourPastors,
          pastors
        },
      },
    };
  },
}));
