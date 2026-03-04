import type { Schema, Struct } from '@strapi/strapi';

export interface EventEventActionCard extends Struct.ComponentSchema {
  collectionName: 'components_event_event_action_cards';
  info: {
    displayName: 'EventActionCard';
    icon: 'stack';
  };
  attributes: {
    ctaButton: Schema.Attribute.Component<'global.button', false>;
    details: Schema.Attribute.Component<'global.text', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    mainIcon: Schema.Attribute.Component<'global.icon-text', false>;
    options: Schema.Attribute.Component<'global.text', true>;
    tags: Schema.Attribute.Component<'event.event-tags', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleStyles: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['dark', 'soft', 'brand']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'dark'>;
  };
}

export interface EventEventBrochure extends Struct.ComponentSchema {
  collectionName: 'components_event_event_brochures';
  info: {
    displayName: 'EventBrochure';
    icon: 'discuss';
  };
  attributes: {
    embedCode: Schema.Attribute.Text;
    embedUrl: Schema.Attribute.Text;
    file: Schema.Attribute.Media<'files'> & Schema.Attribute.Required;
    provider: Schema.Attribute.Enumeration<['Canva']> &
      Schema.Attribute.Required;
  };
}

export interface EventEventEngage extends Struct.ComponentSchema {
  collectionName: 'components_event_event_engages';
  info: {
    displayName: 'EventEngage';
    icon: 'manyWays';
  };
  attributes: {
    actions: Schema.Attribute.Component<'event.event-action-card', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<2>;
    tagline: Schema.Attribute.Component<'global.badge', false>;
    title: Schema.Attribute.Component<'global.text-block', false> &
      Schema.Attribute.Required;
  };
}

export interface EventEventHero extends Struct.ComponentSchema {
  collectionName: 'components_event_event_heroes';
  info: {
    displayName: 'EventHero';
    icon: 'landscape';
  };
  attributes: {
    actions: Schema.Attribute.Component<'global.button', true>;
    banner: Schema.Attribute.Media<'images' | 'videos'>;
    order: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1>;
    subtitle: Schema.Attribute.String;
    taglines: Schema.Attribute.Component<'event.event-tags', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleBranded: Schema.Attribute.String;
  };
}

export interface EventEventInfoBrochure extends Struct.ComponentSchema {
  collectionName: 'components_event_event_info_brochures';
  info: {
    displayName: 'EventInfoBrochure';
    icon: 'server';
  };
  attributes: {
    brochure: Schema.Attribute.Component<'event.event-brochure', false> &
      Schema.Attribute.Required;
    mainContent: Schema.Attribute.Text & Schema.Attribute.Required;
    mainIcon: Schema.Attribute.Component<'global.icon-text', false>;
    mainTitle: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<2>;
    tagline: Schema.Attribute.Component<'global.badge', false>;
    title: Schema.Attribute.Component<'global.text-block', false>;
    variant: Schema.Attribute.Enumeration<['dark', 'soft']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'dark'>;
  };
}

export interface EventEventInfoComingSoon extends Struct.ComponentSchema {
  collectionName: 'components_event_event_info_coming_soons';
  info: {
    displayName: 'EventInfoComingSoon';
    icon: 'cursor';
  };
  attributes: {
    ctaButton: Schema.Attribute.Component<'global.button', false>;
    mainContent: Schema.Attribute.Text & Schema.Attribute.Required;
    mainIcon: Schema.Attribute.Component<'global.icon-text', false>;
    mainTitle: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<2>;
    tag: Schema.Attribute.Component<'event.event-tags', false>;
    tagline: Schema.Attribute.Component<'global.badge', false>;
    title: Schema.Attribute.Component<'global.text-block', false> &
      Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<['dark', 'soft', 'brand']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'dark'>;
  };
}

export interface EventEventTags extends Struct.ComponentSchema {
  collectionName: 'components_event_event_tags';
  info: {
    displayName: 'EventTags';
    icon: 'connector';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    borderColor: Schema.Attribute.String;
    iconColor: Schema.Attribute.String;
    iconText: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    labelColor: Schema.Attribute.String;
  };
}

export interface GlobalBadge extends Struct.ComponentSchema {
  collectionName: 'components_global_badges';
  info: {
    displayName: 'Badge';
    icon: 'pin';
  };
  attributes: {
    icon: Schema.Attribute.String;
    iconColor: Schema.Attribute.String;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    textColor: Schema.Attribute.String;
  };
}

export interface GlobalButton extends Struct.ComponentSchema {
  collectionName: 'components_global_buttons';
  info: {
    displayName: 'Button';
    icon: 'bold';
  };
  attributes: {
    classNames: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    iconColor: Schema.Attribute.String;
    iconPosition: Schema.Attribute.Enumeration<
      ['left', 'middle', 'right', 'top', 'bottom']
    > &
      Schema.Attribute.DefaultTo<'left'>;
    iconText: Schema.Attribute.Enumeration<
      [
        'ArrowRight',
        'ArrowUpRight',
        'CalendarDateLinear',
        'CalendarDays',
        'ClockCircleLinear',
        'Coins',
        'FileText',
        'Gift',
        'GlobalLinear',
        'HeartLinear',
        'Idea',
        'LetterLinear',
        'LiveStreaming',
        'MapPointLinear',
        'Megaphone',
        'NotebookMinimalisticOutline',
        'PhoneCallingLinear',
        'PlayBold',
        'RaynaEmptyCalendar',
        'SquqreArrowRightUpOutline',
        'Star',
        'Store',
        'TrendingUp',
        'Trophy',
        'UserRoundedLinear',
        'UsersGroupRoundedLinear',
      ]
    >;
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
    displayName: 'Card';
    icon: 'connector';
  };
  attributes: {
    ctaLabel: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    iconText: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    order: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface GlobalIconText extends Struct.ComponentSchema {
  collectionName: 'components_global_icon_texts';
  info: {
    displayName: 'IconText';
    icon: 'paintBrush';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    borderColor: Schema.Attribute.String;
    iconColor: Schema.Attribute.String;
    iconText: Schema.Attribute.Enumeration<
      [
        'ArrowRight',
        'ArrowUpRight',
        'CalendarDateLinear',
        'CalendarDays',
        'ClockCircleLinear',
        'Coins',
        'Download',
        'FileText',
        'Gift',
        'GlobalLinear',
        'HeartLinear',
        'Idea',
        'LetterLinear',
        'LiveStreaming',
        'MapPointLinear',
        'Megaphone',
        'NotebookMinimalisticOutline',
        'PhoneCallingLinear',
        'PlayBold',
        'RaynaEmptyCalendar',
        'SquqreArrowRightUpOutline',
        'Star',
        'Store',
        'TrendingUp',
        'Trophy',
        'UserRoundedLinear',
        'UsersGroupRoundedLinear',
      ]
    > &
      Schema.Attribute.Required;
    label: Schema.Attribute.String;
    labelColor: Schema.Attribute.String;
  };
}

export interface GlobalStyles extends Struct.ComponentSchema {
  collectionName: 'components_global_styles';
  info: {
    displayName: 'Styles';
    icon: 'puzzle';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    borderColor: Schema.Attribute.String;
    iconColor: Schema.Attribute.String;
    secondaryTextColor: Schema.Attribute.String;
    textColor: Schema.Attribute.String;
  };
}

export interface GlobalText extends Struct.ComponentSchema {
  collectionName: 'components_global_texts';
  info: {
    displayName: 'Text';
    icon: 'italic';
  };
  attributes: {
    key: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GlobalTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_global_text_blocks';
  info: {
    displayName: 'TextBlock';
    icon: 'quote';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleBranded: Schema.Attribute.String;
  };
}

export interface SectionAboutCci extends Struct.ComponentSchema {
  collectionName: 'components_section_about_ccis';
  info: {
    displayName: 'AboutCCI';
    icon: 'message';
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    ctaLabel: Schema.Attribute.String & Schema.Attribute.Required;
    ctaUrl: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleBranded: Schema.Attribute.String;
  };
}

export interface SectionAboutCciCanada extends Struct.ComponentSchema {
  collectionName: 'components_section_about_cci_canadas';
  info: {
    displayName: 'AboutCCICanada';
    icon: 'crop';
  };
  attributes: {
    badge: Schema.Attribute.Component<'global.badge', false>;
    content: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleBranded: Schema.Attribute.String;
  };
}

export interface SectionAboutPastors extends Struct.ComponentSchema {
  collectionName: 'components_section_about_pastors';
  info: {
    displayName: 'AboutPastors';
    icon: 'user';
  };
  attributes: {
    ctaButton: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    logo: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionBecomeAMember extends Struct.ComponentSchema {
  collectionName: 'components_section_become_a_members';
  info: {
    displayName: 'BecomeAMember';
    icon: 'earth';
  };
  attributes: {
    badge: Schema.Attribute.Component<'global.badge', false>;
    ctaButton: Schema.Attribute.Component<'global.button', false>;
    steps: Schema.Attribute.Component<'global.connect-card', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.Component<'global.text-block', false>;
  };
}

export interface SectionContact extends Struct.ComponentSchema {
  collectionName: 'components_section_contacts';
  info: {
    displayName: 'Contact';
    icon: 'pinMap';
  };
  attributes: {
    ctaLabel: Schema.Attribute.String;
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    fullAddress: Schema.Attribute.String & Schema.Attribute.Required;
    googleEmbedHtml: Schema.Attribute.Text;
    googleMapUrl: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    socialLinks: Schema.Attribute.JSON;
    subtitleOne: Schema.Attribute.String;
    titleOne: Schema.Attribute.String & Schema.Attribute.Required;
    titleTwo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionFaQs extends Struct.ComponentSchema {
  collectionName: 'components_section_fa_qs';
  info: {
    displayName: 'FAQs';
    icon: 'server';
  };
  attributes: {
    order: Schema.Attribute.Integer;
    tagline: Schema.Attribute.Component<'global.badge', false>;
    title: Schema.Attribute.Component<'global.text-block', false>;
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
    badge: Schema.Attribute.Component<'global.badge', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleBranded: Schema.Attribute.String;
  };
}

export interface SectionInterestGroups extends Struct.ComponentSchema {
  collectionName: 'components_section_interest_groups';
  info: {
    displayName: 'InterestGroups';
    icon: 'manyToMany';
  };
  attributes: {
    badge: Schema.Attribute.Component<'global.badge', true>;
    title: Schema.Attribute.Component<'global.text-block', true>;
  };
}

export interface SectionJoinServiceUnit extends Struct.ComponentSchema {
  collectionName: 'components_section_join_service_units';
  info: {
    displayName: 'JoinServiceUnit';
    icon: 'check';
  };
  attributes: {
    badge: Schema.Attribute.Component<'global.badge', false>;
    ctaButton: Schema.Attribute.Component<'global.button', false>;
    title: Schema.Attribute.Component<'global.text-block', false>;
  };
}

export interface SectionLatestMessages extends Struct.ComponentSchema {
  collectionName: 'components_section_latest_messages';
  info: {
    displayName: 'LatestMessages';
    icon: 'headphone';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleBranded: Schema.Attribute.String;
  };
}

export interface SectionLocations extends Struct.ComponentSchema {
  collectionName: 'components_section_locations';
  info: {
    displayName: 'Locations';
    icon: 'chartPie';
  };
  attributes: {
    badge: Schema.Attribute.Component<'global.badge', false>;
    campusSubtitle: Schema.Attribute.Text;
    campusTabLabel: Schema.Attribute.String & Schema.Attribute.Required;
    cellChurchSubtitle: Schema.Attribute.Text;
    cellChurchTabLabel: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionMaps extends Struct.ComponentSchema {
  collectionName: 'components_section_maps';
  info: {
    displayName: 'Maps';
    icon: 'bulletList';
  };
  attributes: {
    badge: Schema.Attribute.Component<'global.badge', false>;
    title: Schema.Attribute.Component<'global.text-block', false> &
      Schema.Attribute.Required;
  };
}

export interface SectionMissionVision extends Struct.ComponentSchema {
  collectionName: 'components_section_mission_visions';
  info: {
    displayName: 'MissionVision';
    icon: 'lightbulb';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    mission: Schema.Attribute.Component<'global.text-block', false>;
    vision: Schema.Attribute.Component<'global.text-block', true>;
  };
}

export interface SectionOthersGiving extends Struct.ComponentSchema {
  collectionName: 'components_section_others_givings';
  info: {
    displayName: 'OthersGiving';
    icon: 'gift';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionOurApproach extends Struct.ComponentSchema {
  collectionName: 'components_section_our_approaches';
  info: {
    displayName: 'ourApproach';
    icon: 'command';
  };
  attributes: {
    badge: Schema.Attribute.Component<'global.badge', false> &
      Schema.Attribute.Required;
    items: Schema.Attribute.Component<'global.connect-card', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String;
  };
}

export interface SectionOurPastors extends Struct.ComponentSchema {
  collectionName: 'components_section_our_pastors';
  info: {
    displayName: 'OurPastors';
    icon: 'globe';
  };
  attributes: {
    ctaLabel: Schema.Attribute.String;
    title: Schema.Attribute.Component<'global.text-block', false>;
  };
}

export interface SectionOurPurpose extends Struct.ComponentSchema {
  collectionName: 'components_section_our_purposes';
  info: {
    displayName: 'OurPurpose';
    icon: 'check';
  };
  attributes: {
    content: Schema.Attribute.Component<'global.text-block', true>;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.Component<'global.text-block', false> &
      Schema.Attribute.Required;
  };
}

export interface SectionPlanYourVisit extends Struct.ComponentSchema {
  collectionName: 'components_section_plan_your_visits';
  info: {
    displayName: 'PlanYourVisit';
    icon: 'cursor';
  };
  attributes: {
    cta: Schema.Attribute.Component<'global.button', true> &
      Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionReadyToVisit extends Struct.ComponentSchema {
  collectionName: 'components_section_ready_to_visits';
  info: {
    displayName: 'ReadyToVisit';
    icon: 'arrowRight';
  };
  attributes: {
    cta: Schema.Attribute.Component<'global.button', false>;
    title: Schema.Attribute.Component<'global.text-block', false>;
  };
}

export interface SectionStartGiving extends Struct.ComponentSchema {
  collectionName: 'components_section_start_givings';
  info: {
    displayName: 'Givings';
    icon: 'hashtag';
  };
  attributes: {
    mainTitle: Schema.Attribute.Component<'global.text-block', false> &
      Schema.Attribute.Required;
    secondaryTitle: Schema.Attribute.String;
  };
}

export interface SectionStepsToGetConnected extends Struct.ComponentSchema {
  collectionName: 'components_section_steps_to_get_connecteds';
  info: {
    displayName: 'StepsToGetConnected';
    icon: 'oneToMany';
  };
  attributes: {
    items: Schema.Attribute.Component<'global.connect-card', true>;
    title: Schema.Attribute.Component<'global.text-block', true>;
  };
}

export interface SectionUpcomingEvents extends Struct.ComponentSchema {
  collectionName: 'components_section_upcoming_events';
  info: {
    displayName: 'ComingUp';
    icon: 'bulletList';
  };
  attributes: {
    fixedEvents: Schema.Attribute.Relation<
      'oneToMany',
      'api::fixed-event.fixed-event'
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleBranded: Schema.Attribute.String;
    upcomingEventsTitle: Schema.Attribute.String;
    viewAllEvents: Schema.Attribute.String;
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
    titleBranded: Schema.Attribute.String;
  };
}

export interface SectionWhatToExpect extends Struct.ComponentSchema {
  collectionName: 'components_section_what_to_expects';
  info: {
    displayName: 'WhatToExpect';
    icon: 'collapse';
  };
  attributes: {
    items: Schema.Attribute.Component<'global.connect-card', true>;
    title: Schema.Attribute.Component<'global.text-block', false> &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'event.event-action-card': EventEventActionCard;
      'event.event-brochure': EventEventBrochure;
      'event.event-engage': EventEventEngage;
      'event.event-hero': EventEventHero;
      'event.event-info-brochure': EventEventInfoBrochure;
      'event.event-info-coming-soon': EventEventInfoComingSoon;
      'event.event-tags': EventEventTags;
      'global.badge': GlobalBadge;
      'global.button': GlobalButton;
      'global.connect-card': GlobalConnectCard;
      'global.icon-text': GlobalIconText;
      'global.styles': GlobalStyles;
      'global.text': GlobalText;
      'global.text-block': GlobalTextBlock;
      'section.about-cci': SectionAboutCci;
      'section.about-cci-canada': SectionAboutCciCanada;
      'section.about-pastors': SectionAboutPastors;
      'section.become-a-member': SectionBecomeAMember;
      'section.contact': SectionContact;
      'section.fa-qs': SectionFaQs;
      'section.hero': SectionHero;
      'section.interest-groups': SectionInterestGroups;
      'section.join-service-unit': SectionJoinServiceUnit;
      'section.latest-messages': SectionLatestMessages;
      'section.locations': SectionLocations;
      'section.maps': SectionMaps;
      'section.mission-vision': SectionMissionVision;
      'section.others-giving': SectionOthersGiving;
      'section.our-approach': SectionOurApproach;
      'section.our-pastors': SectionOurPastors;
      'section.our-purpose': SectionOurPurpose;
      'section.plan-your-visit': SectionPlanYourVisit;
      'section.ready-to-visit': SectionReadyToVisit;
      'section.start-giving': SectionStartGiving;
      'section.steps-to-get-connected': SectionStepsToGetConnected;
      'section.upcoming-events': SectionUpcomingEvents;
      'section.ways-to-connect': SectionWaysToConnect;
      'section.what-to-expect': SectionWhatToExpect;
    }
  }
}
