import { SubCategory } from '../types';

import CallToActionWithAnnotation from '../../templates/page-sections/hero/callToActionWithAnnotation';
import CallToActionWithIllustration from '../../templates/page-sections/hero/callToActionWithIllustration';
import CallToActionWithVideo from '../../templates/page-sections/hero/callToActionWithVideo';
import SplitScreen from '../../templates/page-sections/hero/splitScreen';
import WithBackgroundImage from '../../templates/page-sections/hero/withBackgroundImage';

export const hero: SubCategory = {
  name: 'Hero',
  id: 'hero',
  children: [
    {
      name: 'CTA with Annotation',
      component: <CallToActionWithAnnotation />,
    },
    {
      name: 'CTA with Illustration',
      component: <CallToActionWithIllustration />,
    },
    {
      name: 'CTA with Video/Image',
      component: <CallToActionWithVideo />,
    },
    {
      name: 'Split Screen with Image',
      component: <SplitScreen />,
    },
    {
      name: 'With background image and gradient',
      component: <WithBackgroundImage />,
    },
  ],
};
