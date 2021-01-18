import { Category } from '../../data';

import { getCategoriesCount } from '@/utils/getCategoriesCount';

const testData: Category[] = [
  {
    name: 'Page Sections',
    id: 'page-sections',
    children: [
      {
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
        ],
      },
      {
        name: 'Features',
        id: 'features',
        children: [
          {
            name: 'Download App Links',
            filename: 'downloadAppLinks',
          },
          {
            name: 'Simple three column grid',
            filename: 'simpleThreeColumns',
          },
        ],
      },
    ],
  },
  {
    name: 'Navigation',
    id: 'navigation',
    children: [
      {
        name: 'Navbar',
        id: 'navbar',
        children: [
          {
            name: 'Simple with user dropdown',
            filename: 'simple',
          },
        ],
      },
    ],
  },
];

describe('getCategoriesCount', () => {
  it('should return the category count', () => {
    expect(getCategoriesCount(testData)).toEqual(5);
  });
});
