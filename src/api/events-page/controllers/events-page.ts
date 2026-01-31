/**
 * events-page controller
 */

import { factories } from '@strapi/strapi'
import { Context } from 'koa'

export default factories.createCoreController('api::events-page.events-page', ({ strapi }) => ({
  async find(ctx: Context) {
    const response = await super.find(ctx);

    const events = await strapi.documents('api::event.event').findMany({
      status: 'published',
      populate: '*',
    });


    return {
      ...response,
      data: {
        ...response?.data,
        events
      },
    };
  },
}));
