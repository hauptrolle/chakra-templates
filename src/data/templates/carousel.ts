import { SubCategory } from '../types'

export const carousel: SubCategory = {
  name: 'Carousels',
  id: 'carousels',
  children: [
    {
      name: 'Simple Carousel',
      filename: 'simpleCarousel',
    },
    {
      name: 'Carousel with Caption',
      filename: 'captionCarousel',
    },
    {
      name: 'Curved Carousel',
      filename: 'curvedCarousel',
    },
  ],
}
