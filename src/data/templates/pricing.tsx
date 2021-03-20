import { SubCategory } from '../types';

import ThreeTierPricing from '../../templates/page-sections/pricing/threeTierPricing';

export const pricing: SubCategory = {
  name: 'Pricing',
  id: 'pricing',
  children: [
    {
      name: 'Three tiers with emphasized tier',
      component: <ThreeTierPricing />,
    },
  ],
};
