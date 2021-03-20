import { SubCategory } from '../types';

import SocialProfileWithImage from '../../templates/components/cards/socialProfileWithImage';
import SocialProfileSimple from '../../templates/components/cards/socialProfileSimple';
import ProductSimple from '../../templates/components/cards/productSimple';
import Pricing from '../../templates/components/cards/pricing';
import BlogPostWithImage from '../../templates/components/cards/blogPostWithImage';

export const cards: SubCategory = {
  name: 'Cards',
  id: 'cards',
  children: [
    {
      name: 'Social User Profile with Image',
      component: <SocialProfileWithImage />,
    },
    {
      name: 'Social User Profile Simple',
      component: <SocialProfileSimple />,
    },
    {
      name: 'Product Simple',
      component: <ProductSimple />,
    },
    {
      name: 'Pricing',
      component: <Pricing />,
    },
    {
      name: 'Blog Post with Image',
      component: <BlogPostWithImage />,
    },
  ],
};
