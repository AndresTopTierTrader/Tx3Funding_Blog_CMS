/**
 * blog router
 */

import { factories } from '@strapi/strapi';

export default {
  routes: [
    // Public routes for published blogs
    {
      method: 'GET',
      path: '/blogs',
      handler: 'blog.find',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/blogs/:id',
      handler: 'blog.findOne',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    // Protected routes for admin operations
    {
      method: 'POST',
      path: '/blogs',
      handler: 'blog.create',
      config: {
        auth: {
          scope: ['admin::is-authenticated'],
        },
      },
    },
    {
      method: 'PUT',
      path: '/blogs/:id',
      handler: 'blog.update',
      config: {
        auth: {
          scope: ['admin::is-authenticated'],
        },
      },
    },
    {
      method: 'DELETE',
      path: '/blogs/:id',
      handler: 'blog.delete',
      config: {
        auth: {
          scope: ['admin::is-authenticated'],
        },
      },
    },
  ],
};
