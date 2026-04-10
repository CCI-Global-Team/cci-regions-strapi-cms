import type { StrapiApp } from '@strapi/strapi/admin';
import logoCa from './extensions/logo/logo-ca.png';
import logoUs from './extensions/logo/logo-us.png';
import logoUk from './extensions/logo/logo-uk.png';
import logoGlobal from './extensions/logo/logo-global.png';

const region = process.env.STRAPI_ADMIN_REGION;

const regionNames = {
  ca: 'CCI Canada',
  us: 'CCI United States',
  uk: 'CCI United Kingdom',
  default: 'CCI Global'
};
const regionName = regionNames[region as keyof typeof regionNames] || regionNames.default;

const logos = {
  ca: logoCa,
  us: logoUs,
  uk: logoUk,
  default: logoGlobal,
};
const MenuLogo = logos[region as keyof typeof logos] || logos.default;

export default {
  config: {
    auth: { logo: MenuLogo },
    menu: { logo: MenuLogo },
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
    locales: ['en', 'fr-CA', 'fr', 'es'],
    translations: {
      en: {
        "Auth.form.welcome.title": "Welcome Admin 👋",
        "Auth.form.welcome.subtitle": "Log in to your account",
        "Auth.form.email.placeholder": "e.g. admin@joincci.org",
        "HomePage.header.title": "Hello, {name}",
        "HomePage.header.subtitle": `Welcome to ${regionName} administration panel`,
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
