import { getTemplatesCount } from '@/utils/getTemplatesCount';
import { Category } from '../../data/types';

const testData: Category[] = [
  {
    name: 'Page Sections',
    subLabel: 'Test',
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
    subLabel: 'Test',
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

describe('getCategoryCount', () => {
  it('should return the templates count', () => {
    expect(getTemplatesCount(testData)).toEqual(5);
  });
});
