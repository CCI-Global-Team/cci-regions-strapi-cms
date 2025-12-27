export default ({ env }) => ({
  i18n: {
    enabled: true,
    config: {
      locales: ['en', 'fr'],
      defaultLocale: 'en',
    },
  },
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_ACCESS_SECRET"),
        region: env("AWS_REGION"),
        params: {
          ACL: env("AWS_ACL", "public-read"),
          signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 15 * 60),
          Bucket: env("AWS_BUCKET"),
        },
        rootPath: `web-cms-assets/${env("NODE_ENV")}`,
      },
      security: {
        maxFileSize: 10 * 1024 * 1024, // 10 MB
        allowedMimeTypes: [
          "image/jpeg",
          "image/png",
          "image/webp",
          "application/pdf",
        ],
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
