import { SubCategory } from '../types';

import LargeWithAppLinksAndSocial from '../../templates/page-sections/footer/largeWithAppLinksAndSocial';
import LargeWithLogoLeft from '../../templates/page-sections/footer/largeWithLogoLeft';
import LargeWithNewsletter from '../../templates/page-sections/footer/largeWithNewsletter';
import LargeWithLogoCentered from '../../templates/page-sections/footer/largeWithLogoCentered';
import SmallWithSocial from '../../templates/page-sections/footer/smallWithSocial';
import SmallWithLogoLeft from '../../templates/page-sections/footer/smallWithLogoLeft';
import SmallWithNavigation from '../../templates/page-sections/footer/smallWithNavigation';
import SmallCentered from '../../templates/page-sections/footer/smallCentered';

export const footer: SubCategory = {
  name: 'Footer',
  id: 'footer',
  children: [
    {
      name: 'Large with App and Social Links',
      component: <LargeWithAppLinksAndSocial />,
    },
    {
      name: 'Large with Logo Left',
      component: <LargeWithLogoLeft />,
    },
    {
      name: 'Large with Newsletter Form',
      component: <LargeWithNewsletter />,
    },
    {
      name: 'Large with Logo Centered',
      component: <LargeWithLogoCentered />,
    },
    {
      name: 'Small with Social Links',
      component: <SmallWithSocial />,
    },
    {
      name: 'Small with Logo',
      component: <SmallWithLogoLeft />,
    },
    {
      name: 'Small with Navigation',
      component: <SmallWithNavigation />,
    },
    {
      name: 'Small centered',
      component: <SmallCentered />,
    },
  ],
};
