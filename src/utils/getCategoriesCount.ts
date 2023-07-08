import { Category } from '../data/types'

export const getCategoriesCount = (data: Category[]) => {
  const mainCategoriesCount = data.length

  const subCategoriesCount = data
    .map((c) => c.children?.length)
    .reduce<number>((prev, current) => {
      return prev + (current ?? 0)
    }, 0)

  return mainCategoriesCount + subCategoriesCount
}
