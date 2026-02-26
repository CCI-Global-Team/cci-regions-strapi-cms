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
      populate: '*',
      locale: response.data.locale,
    });

    const cellChurches = await strapi.documents('api::campus.campus').findMany({
      where: {
        type: 'cell-church'
      },
      populate: '*',
      locale: response.data.locale,
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
