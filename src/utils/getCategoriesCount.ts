import { Category } from '../data/types';

export const getCategoriesCount = (data: Record<string, Category>) => {
  const mainCategoriesCount = Object.keys(data).length;

  const subCategoriesCount = Object.keys(data)
    .map((c) => Object.keys(data[c].children).length)
    .reduce<number>((prev, current) => {
      return prev + (current ?? 0);
    }, 0);

  return mainCategoriesCount + subCategoriesCount;
};
