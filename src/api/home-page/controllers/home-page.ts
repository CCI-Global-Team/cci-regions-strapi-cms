/**
 * home-page controller
 */

import { factories } from '@strapi/strapi'
import type { Context } from 'koa';

export default factories.createCoreController('api::home-page.home-page', ({ strapi }) => ({
  async find(ctx: Context) {
    const response = await super.find(ctx);

    const events = await strapi.entityService.findMany('api::event.event', {
      sort: { createdAt: 'desc' },
      limit: 3,
      populate: '*',
    });

    return {
      ...response,
      data: {
        ...response.data,
        upcomingEvents: {
          title: 'Upcoming Events',
          viewAll: 'View all events',
          events
        },
      },
    };
  },
}));
