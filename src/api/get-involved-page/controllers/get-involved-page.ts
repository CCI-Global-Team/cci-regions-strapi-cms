/**
 * get-involved-page controller
 */

import { factories } from '@strapi/strapi'
import { Context } from 'koa'

export default factories.createCoreController('api::get-involved-page.get-involved-page', ({ strapi }) => ({
  async find(ctx: Context) {
    const response = await super.find(ctx);

    const units = await strapi.documents('api::unit.unit').findMany({
      populate: '*',
    });


    return {
      ...response,
      data: {
        ...response?.data,
        joinServiceUnit: {
          ...response?.data?.joinServiceUnit,
          units
        }
      },
    };
  },
}));
