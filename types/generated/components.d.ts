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

export interface GlobalConnectCard extends Struct.ComponentSchema {
  collectionName: 'components_global_connect_cards';
  info: {
    displayName: 'ConnectCard';
    icon: 'connector';
  };
  attributes: {
    ctaLabel: Schema.Attribute.String & Schema.Attribute.Required;
    ctaUrl: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    iconText: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
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
    displayName: 'ComingUp';
    icon: 'bulletList';
  };
  attributes: {
    fixed_events: Schema.Attribute.Relation<
      'oneToMany',
      'api::fixed-event.fixed-event'
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionWaysToConnect extends Struct.ComponentSchema {
  collectionName: 'components_section_ways_to_connects';
  info: {
    displayName: 'WaysToConnect';
    icon: 'apps';
  };
  attributes: {
    items: Schema.Attribute.Component<'global.connect-card', true> &
      Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'global.button': GlobalButton;
      'global.connect-card': GlobalConnectCard;
      'section.hero': SectionHero;
      'section.upcoming-events': SectionUpcomingEvents;
      'section.ways-to-connect': SectionWaysToConnect;
    }
  }
}
