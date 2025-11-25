import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    theme: {
      light: {
        colors: {
          primary100: '#FDEBED',
          primary200: '#F8C7CA',
          primary500: '#E43A40',
          primary600: '#C92E33',
          primary700: '#9E2026',
          buttonPrimary500: '#E43A40',
          buttonPrimary600: '#C92E33',
          buttonPrimary700: '#9E2026',
        },
      },
      dark: {
        colors: {
          primary100: '',
          primary200: '#7A1C21',
          primary500: '#FF4F55',
          primary600: '#E04348',
          primary700: '#B53338',
          buttonPrimary500: '#FF4F55',
          buttonPrimary600: '#E04348',
          buttonPrimary700: '#B53338',
        },
      },
    },
    locales: ['fr'],
    notifications: { releases: false },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
