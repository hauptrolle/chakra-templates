import { SubCategory } from '../types';

import SplitWithImage from '../../templates/page-sections/features/splitWithImage';
import SimpleThreeColumns from '../../templates/page-sections/features/simpleThreeColumns';
import StatsGridWithImage from '../../templates/page-sections/features/statsGridWithImage';
import GridListWithHeading from '../../templates/page-sections/features/gridListWithHeading';

export const features: SubCategory = {
  name: 'Features',
  id: 'features',
  children: [
    {
      name: '2 columns with Image',
      component: <SplitWithImage />,
    },
    {
      name: 'Simple three column grid',
      component: <SimpleThreeColumns />,
    },
    {
      name: 'Stats Grid with Image',
      component: <StatsGridWithImage />,
    },
    {
      name: 'Grid list with heading',
      component: <GridListWithHeading />,
    },
  ],
};
