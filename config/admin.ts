export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'your-admin-jwt-secret-fallback'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'your-api-token-salt-fallback'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'your-transfer-token-salt-fallback'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY', 'your-encryption-key-fallback'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
