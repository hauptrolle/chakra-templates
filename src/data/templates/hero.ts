import { SubCategory } from '../types';

export const hero: SubCategory = {
  name: 'Hero',
  id: 'hero',
  children: [
    {
      name: 'CTA with Annotation',
      filename: 'callToActionWithAnnotation',
      tags: ['new'],
    },
    {
      name: 'CTA with Illustration',
      filename: 'callToActionWithIllustration',
      tags: ['new'],
    },
    {
      name: 'CTA with Video/Image',
      filename: 'callToActionWithVideo',
      tags: ['new'],
    },
    {
      name: 'Split Screen with Image',
      filename: 'splitScreen',
    },
    {
      name: 'With background image and gradient',
      filename: 'withBackgroundImage',
    },
    {
      name: 'With background video and gradient',
      filename: 'withBackgroundVideo',
    },
  ],
};
