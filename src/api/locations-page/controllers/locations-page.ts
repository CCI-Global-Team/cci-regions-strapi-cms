/**
 * locations-page controller
 */

import { factories } from '@strapi/strapi'
import type { Context } from 'koa';

export default factories.createCoreController('api::locations-page.locations-page', ({ strapi }) => ({
  async find(ctx: Context) {
    const response = await super.find(ctx);

    const campuses = await strapi.documents('api::campus.campus').findMany({
      where: {
        type: 'campus'
      },
      sort: [{ inceptionDate: 'asc' }],
      populate: '*',
    });

    const cellChurches = await strapi.documents('api::campus.campus').findMany({
      where: {
        type: 'cell-church'
      },
      sort: [{ inceptionDate: 'asc' }],
      populate: '*',
    });

    return {
      ...response,
      data: {
        ...response?.data,
        locations: {
          ...response?.data?.locations,
          campuses,
          cellChurches
        }
      },
    };
  },
}));
