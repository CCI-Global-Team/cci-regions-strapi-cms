import type { StrapiApp } from '@strapi/strapi/admin';
import MenuLogo from './extensions/logo/menu-logo.png';

export default {
  config: {
    auth: {
      logo: MenuLogo,
    },
    menu: {
      logo: MenuLogo,
    },
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
    locales: ['fr-CA'],
    translations: {
      en: {
        "Auth.form.welcome.title": "Welcome Admin 👋",
        "Auth.form.welcome.subtitle": "Log in to your account",
        "Auth.form.email.placeholder": "e.g. admin@joincci.org",
        "HomePage.header.title": "Hello, {name}",
        "HomePage.header.subtitle": "Welcome to CCI Canada's administration panel",
        "Auth.form.register.subtitle": "Setup your account"
      }
    },
    // Disable notifications about new Strapi releases
    notifications: { releases: false },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
