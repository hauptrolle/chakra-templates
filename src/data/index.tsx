import { buttons } from './components/socialMediaButtons';
import { cards } from './components/cards';
import { hero } from './templates/hero';
import { features } from './templates/features';
import { navbar } from './templates/navbar';
import { sidebar } from './templates/sidebar';
import { authentication } from './templates/authentication';
import { newsletter } from './templates/newsletter';
import { footer } from './templates/footer';
import { testimonials } from './templates/testimonials';
import { pricing } from './templates/pricing';
import { statistics } from './templates/statistics';
import { blog } from './templates/blog';
import { contact } from './templates/contact';
import { carousel } from './templates/carousel';

import { Category } from './types';

export const data: Category[] = [
  {
    name: 'Page Sections',
    subLabel: 'Large Page Sections like Hero, Features ...',
    id: 'page-sections',
    children: [
      hero,
      features,
      footer,
      testimonials,
      pricing,
      statistics,
      carousel,
    ],
  },
  {
    name: 'Blog',
    subLabel: 'A section regarding all blog elements',
    id: 'blog',
    children: [blog],
  },
  {
    name: 'Navigation',
    id: 'navigation',
    subLabel: 'Header Navigation for Websites & Apps',
    children: [navbar, sidebar],
  },
  {
    name: 'Forms',
    id: 'forms',
    subLabel: 'User Login & Newsletter Forms',
    children: [authentication, newsletter, contact],
  },
  {
    name: 'Components',
    id: 'components',
    subLabel: 'Smaller buildings blocks like Cards, Buttons ...',
    children: [cards, buttons],
  },
];
