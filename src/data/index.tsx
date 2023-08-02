import { socialButtons } from './components/socialMediaButtons';
import { buttons } from './components/buttons';
import { cards } from './components/cards';
import { result } from './components/result';
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
import { product } from './templates/product';
import { multistep } from './templates/basic3StepForm';

import { Category } from './types';
import { imagesAndIcons } from './components/imagesAndIcons';
import { accordion } from './components/accordion';
import { tables } from './components/tables';

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
      product,
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
    subLabel: 'User Login, Newsletter & Multi-Step Forms',
    children: [authentication, newsletter, contact, multistep],
  },
  {
    name: 'Components',
    id: 'components',
    subLabel: 'Smaller buildings blocks like Cards, Buttons, Result ...',
    children: [
      cards,
      buttons,
      socialButtons,
      result,
      imagesAndIcons,
      accordion,
      tables,
    ],
  },
];
