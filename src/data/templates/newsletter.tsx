import { SubCategory } from '../types';

import CardWithIllustration from '../../templates/forms/newsletter/cardWithIllustration';
import Simple from '../../templates/forms/newsletter/simple';

export const newsletter: SubCategory = {
  name: 'Newsletter',
  id: 'newsletter',
  children: [
    {
      name: 'Card with Illustration',
      component: <CardWithIllustration />,
    },
    {
      name: 'Simple',
      component: <Simple />,
    },
  ],
};
