import { SubCategory } from '../types';

import All from '../../templates/components/social-media-buttons/all';
import MessengerButton from '../../templates/components/social-media-buttons/messenger';
import FacebookButton from '../../templates/components/social-media-buttons/facebook';
import LinkedinButton from '../../templates/components/social-media-buttons/linkedIn';
import GoogleButton from '../../templates/components/social-media-buttons/google';

export const buttons: SubCategory = {
  name: 'Social Media Buttons',
  id: 'social-media-buttons',
  children: [
    {
      name: 'All Buttons',
      component: <All />,
    },
    {
      name: 'Messenger Button',
      component: <MessengerButton />,
    },
    {
      name: 'Facebook Button',
      component: <FacebookButton />,
    },
    {
      name: 'LinkedIn Button',
      component: <LinkedinButton />,
    },
    {
      name: 'Google Button',
      component: <GoogleButton />,
    },
  ],
};
