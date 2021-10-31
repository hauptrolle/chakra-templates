import { SubCategory } from '../types';

export const result: SubCategory = {
  name: 'Result',
  id: 'result',
  children: [
    {
      name: 'Success result',
      filename: 'success',
    },
    {
      name: 'Info result',
      filename: 'info',
    },
    {
      name: 'Warning result',
      filename: 'warning',
    },
    {
      name: 'Error result',
      filename: 'error',
    },
    {
      name: '404 result',
      filename: '404',
    },
  ],
};
