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

export const data: Category[] = [
  {
    name: 'Page Sections',
    subLabel: 'Large Page Sections like Hero, Features ...',
    id: 'page-sections',
    children: [hero, features, footer, testimonials, pricing],
  },
  {
    name: 'Navigation',
    id: 'navigation',
    subLabel: 'Header Navigation for Websites & Apps',
    children: [navbar],
  },
  {
    name: 'Forms',
    id: 'forms',
    subLabel: 'User Login & Newsletter Forms',
    children: [authentication, newsletter],
  },
  {
    name: 'Components',
    id: 'components',
    subLabel: 'Smaller buildings blocks like Cards ...',
    children: [cards],
  },
];
