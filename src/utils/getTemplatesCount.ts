import { Category } from '../data/types';

export const getTemplatesCount = (data: Record<string, Category>) => {
  return Object.keys(data)
    .map((c) => {
      return Object.keys(data[c].children)
        .map((sc) => data[c].children[sc].children.length)
        .reduce(
          (previousValue, currentValue) => previousValue! + currentValue!,
          0
        );
    })
    .reduce((previousValue, currentValue) => previousValue! + currentValue!, 0);
};
