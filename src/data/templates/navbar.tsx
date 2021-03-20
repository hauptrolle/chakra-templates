import { SubCategory } from '../types';

import WithSubnavigation from '../../templates/navigation/navbar/withSubnavigation';
import Simple from '../../templates/navigation/navbar/simple';
import WithAction from '../../templates/navigation/navbar/withAction';

export const navbar: SubCategory = {
  name: 'Navbar',
  id: 'navbar',
  children: [
    {
      name: 'With Sub-Navigation & CTA',
      component: <WithSubnavigation />,
    },
    {
      name: 'Simple with user dropdown',
      component: <Simple />,
    },
    {
      name: 'With action button & user dropdown',
      component: <WithAction />,
    },
  ],
};
