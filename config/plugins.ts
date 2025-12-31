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
        s3Options: {
          region: env('AWS_REGION'),
        },
        params: {
          ACL: env("AWS_ACL", "public-read"),
          signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 15 * 60),
          Bucket: env("AWS_BUCKET"),
        },
        rootPath: `web-cms-assets/${env("NODE_ENV")}`,
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
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
  },
});
