import { buttons } from './components/socialMediaButtons';
import { cards } from './components/cards';
import { hero } from './templates/hero';
import { features } from './templates/features';
import { navbar } from './templates/navbar';
import { authentication } from './templates/authentication';
import { newsletter } from './templates/newsletter';
import { footer } from './templates/footer';
import { testimonials } from './templates/testimonials';
import { pricing } from './templates/pricing';

import { Category } from './types';

export const data: Record<string, Category> = {
  'page-sections': {
    name: 'Page Sections',
    subLabel: 'Large Page Sections like Hero, Features ...',
    children: {
      hero,
      features,
      footer,
      testimonials,
      pricing,
    },
  },
  navigation: {
    name: 'Navigation',
    subLabel: 'Header Navigation for Websites & Apps',
    children: {
      navbar,
    },
  },
  forms: {
    name: 'Forms',
    subLabel: 'User Login & Newsletter Forms',
    children: { authentication, newsletter },
  },
  components: {
    name: 'Components',
    subLabel: 'Smaller buildings blocks like Cards, Buttons ...',
    children: { cards, buttons },
  },
};
