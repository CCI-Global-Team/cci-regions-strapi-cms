import type { Schema, Struct } from '@strapi/strapi';

export interface GlobalNavItem extends Struct.ComponentSchema {
  collectionName: 'components_global_nav_items';
  info: {
    displayName: 'NavItem';
    icon: 'layout';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    order: Schema.Attribute.Integer & Schema.Attribute.Required;
    target: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'_self'>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GlobalNavLogo extends Struct.ComponentSchema {
  collectionName: 'components_global_nav_logos';
  info: {
    displayName: 'NavLogo';
    icon: 'layout';
  };
  attributes: {
    alt: Schema.Attribute.String;
    height: Schema.Attribute.Integer;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    target: Schema.Attribute.String & Schema.Attribute.DefaultTo<'_self'>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'global.nav-item': GlobalNavItem;
      'global.nav-logo': GlobalNavLogo;
    }
  }
}
