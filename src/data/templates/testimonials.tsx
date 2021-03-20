import { SubCategory } from '../types';

import WithSpeechBubbles from '../../templates/page-sections/testimonials/withSpeechBubbles';
import WithLargeQuote from '../../templates/page-sections/testimonials/withLargeQuote';

export const testimonials: SubCategory = {
  name: 'Testimonials',
  id: 'testimonials',
  children: [
    {
      name: 'With Speech Bubbles',
      component: <WithSpeechBubbles />,
    },
    {
      name: 'With large Quote',
      component: <WithLargeQuote />,
    },
  ],
};
