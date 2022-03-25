import { SubCategory } from '../types';

export const statistics: SubCategory = {
  name: 'Statistics',
  id: 'statistics',
  children: [
    {
      name: 'Basic stats',
      filename: 'basicStatistics',
    },
    {
      name: 'Stats with icon',
      filename: 'iconStatistics',
    },
    {
      name: 'Statistics with title and description',
      filename: 'statsTitleDescription',
    },
  ],
};
