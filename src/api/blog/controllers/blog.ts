/**
 * blog controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::blog.blog', ({ strapi }) => ({
  // Override the find method to only return published blogs for public access
  async find(ctx) {
    // If it's a public request (no auth), only return published blogs
    if (!ctx.state.user) {
      if (!ctx.query.filters) {
        ctx.query.filters = {};
      }
      (ctx.query.filters as any).publishedAt = {
        $notNull: true
      };
    }
    
    const { data, meta } = await super.find(ctx);
    return { data, meta };
  },

  // Override the findOne method to only return published blogs for public access
  async findOne(ctx) {
    // If it's a public request (no auth), only return published blogs
    if (!ctx.state.user) {
      if (!ctx.query.filters) {
        ctx.query.filters = {};
      }
      (ctx.query.filters as any).publishedAt = {
        $notNull: true
      };
    }
    
    const response = await super.findOne(ctx);
    return response;
  }
}));
