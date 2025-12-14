import type { Schema, Struct } from '@strapi/strapi';

export interface GlobalButton extends Struct.ComponentSchema {
  collectionName: 'components_global_buttons';
  info: {
    displayName: 'Button';
    icon: 'bold';
  };
  attributes: {
    classNames: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    iconText: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer;
    url: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<
      [
        'primary',
        'secondary',
        'tertiary',
        'outline',
        'error',
        'destructive',
        'success',
      ]
    > &
      Schema.Attribute.Required;
  };
}

export interface SectionHero extends Struct.ComponentSchema {
  collectionName: 'components_section_heroes';
  info: {
    displayName: 'Hero';
    icon: 'apps';
  };
  attributes: {
    actions: Schema.Attribute.Component<'global.button', true>;
    background: Schema.Attribute.Media<'images' | 'videos'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionUpcomingEvents extends Struct.ComponentSchema {
  collectionName: 'components_section_upcoming_events';
  info: {
    displayName: 'UpcomingEvents';
    icon: 'bulletList';
  };
  attributes: {
    events: Schema.Attribute.Relation<'oneToMany', 'api::event.event'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    viewAllText: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'global.button': GlobalButton;
      'section.hero': SectionHero;
      'section.upcoming-events': SectionUpcomingEvents;
    }
  }
}
