export default ({ env }) => {
  // Validate Cloudinary environment variables
  const cloudinaryName = env('CLOUDINARY_NAME');
  const cloudinaryKey = env('CLOUDINARY_KEY');
  const cloudinarySecret = env('CLOUDINARY_SECRET');

  if (!cloudinaryName || !cloudinaryKey || !cloudinarySecret) {
    console.error('❌ Cloudinary configuration missing! Please check your environment variables:');
    console.error('CLOUDINARY_NAME:', cloudinaryName ? '✅ Set' : '❌ Missing');
    console.error('CLOUDINARY_KEY:', cloudinaryKey ? '✅ Set' : '❌ Missing');
    console.error('CLOUDINARY_SECRET:', cloudinarySecret ? '✅ Set' : '❌ Missing');
    throw new Error('Cloudinary environment variables are required but not properly configured');
  }

  return {
    'users-permissions': {
      config: {
        jwtSecret: env('JWT_SECRET', 'your-jwt-secret-fallback'),
      },
    },
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: cloudinaryName,
          api_key: cloudinaryKey,
          api_secret: cloudinarySecret,
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
  };
};
