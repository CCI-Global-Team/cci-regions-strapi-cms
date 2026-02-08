/**
 * community-page controller
 */

import { factories } from '@strapi/strapi'
import type { Context } from 'koa';

export default factories.createCoreController('api::community-page.community-page', ({ strapi }) => ({
  async find(ctx: Context) {
    const response = await super.find(ctx);

    const maps = await strapi.documents('api::map.map').findMany({
      status: "published",
      sort: { name: 'asc' },
      populate: {
        campus: {
          fields: ['name'],
          populate: {
            address: {
              fields: ['city', 'province'],
            },
          },
        },
        group_leaders: {
          fields: ['suffix', 'firstName', 'lastName', 'phone', 'email']
        }
      },
    });

    const groups = await strapi.documents('api::group.group').findMany({
      status: "published",
      sort: { name: 'asc' },
      populate: {
        campus: {
          fields: ['name'],
          populate: {
            address: {
              fields: ['city', 'province']
            }
          }
        },
        group_leaders: {
          fields: ['suffix', 'firstName', 'lastName', 'phone', 'email']
        }
      },
    });

    return {
      ...response,
      data: {
        ...response.data,
        maps: {
          ...response.data.maps,
          maps,
        },
        interestGroups: {
          ...response.data.interestGroups,
          groups,
        },
      },
    };
  },
}));
