export interface Category {
  name: string;
  id: string;
  children?: SubCategory[];
}

export interface SubCategory {
  name: string;
  id: string;
  description?: string;
  children?: Template[];
}

export interface Template {
  name: string;
  filename: string;
  tags?: string[];
}

export const data: Category[] = [
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
            name: 'Download App Links',
            filename: 'downloadAppLinks',
          },
          {
            name: 'With background image and gradient',
            filename: 'withBackgroundImage',
          },
          {
            name: 'With text, image & CTA',
            filename: 'withImage',
          },
        ],
      },
      {
        name: 'Features',
        id: 'features',
        children: [
          {
            name: 'Stats Grid with Image',
            filename: 'statsGridWithImage',
          },
          {
            name: 'Download App Links',
            filename: 'downloadAppLinks',
          },
          {
            name: 'Simple three column grid',
            filename: 'simpleThreeColumns',
          },
          {
            name: 'Grid list with heading',
            filename: 'gridListWithHeading',
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
          {
            name: 'With action button & user dropdown',
            filename: 'withAction',
          },
        ],
      },
    ],
  },
  {
    name: 'Forms',
    id: 'forms',
    children: [
      {
        name: 'Authentication',
        id: 'authentication',
        children: [
          {
            name: 'Join our Team',
            filename: 'joinOurTeam',
          },
          {
            name: 'Simple Login Card',
            filename: 'simpleCard',
          },
          {
            name: 'Split Screen with Image',
            filename: 'splitScreen',
          },
        ],
      },
      {
        name: 'Newsletter',
        id: 'newsletter',
        children: [
          {
            name: 'Email address only Form',
            filename: 'emailOnly',
          },
        ],
      },
    ],
  },
];
