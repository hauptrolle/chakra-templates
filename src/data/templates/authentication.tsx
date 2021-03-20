import { SubCategory } from '../types';

import JoinOurTeam from '../../templates/forms/authentication/joinOurTeam';
import SimpleCard from '../../templates/forms/authentication/simpleCard';
import SplitScreen from '../../templates/forms/authentication/splitScreen';

export const authentication: SubCategory = {
  name: 'Authentication',
  id: 'authentication',
  children: [
    {
      name: 'Join our Team',
      component: <JoinOurTeam />,
    },
    {
      name: 'Simple Login Card',
      component: <SimpleCard />,
    },
    {
      name: 'Split Screen with Image',
      component: <SplitScreen />,
    },
  ],
};
