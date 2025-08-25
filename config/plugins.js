module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', 'your-jwt-secret-fallback'),
    },
  },
  upload: {
    config: {
      provider: 'local',
      sizeLimit: 100000,
    },
  },
});
