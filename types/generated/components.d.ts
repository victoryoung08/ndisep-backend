import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksLogos extends Schema.Component {
  collectionName: 'components_blocks_logos';
  info: {
    displayName: 'logos';
    icon: 'cube';
  };
  attributes: {
    media: Attribute.Media;
  };
}

export interface BlocksSeo extends Schema.Component {
  collectionName: 'components_blocks_seos';
  info: {
    displayName: 'seo';
    description: '';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface BlocksSliderTextWithImage extends Schema.Component {
  collectionName: 'components_blocks_slider_text_with_images';
  info: {
    displayName: 'SliderTextWithImage';
  };
  attributes: {
    image: Attribute.Media;
    heading: Attribute.String;
    body: Attribute.Text;
  };
}

export interface ComponentHero extends Schema.Component {
  collectionName: 'components_component_heroes';
  info: {
    displayName: 'Hero';
    icon: 'folder';
  };
  attributes: {
    seo: Attribute.Component<'blocks.seo'>;
  };
}

export interface ComponentSlider extends Schema.Component {
  collectionName: 'components_component_sliders';
  info: {
    displayName: 'Slider';
    icon: 'folder';
  };
  attributes: {
    slider: Attribute.Component<'blocks.slider-text-with-image', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.logos': BlocksLogos;
      'blocks.seo': BlocksSeo;
      'blocks.slider-text-with-image': BlocksSliderTextWithImage;
      'component.hero': ComponentHero;
      'component.slider': ComponentSlider;
    }
  }
}
