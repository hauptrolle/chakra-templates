import { Metadata } from 'next/types'
import { notFound } from 'next/navigation'

import { SEO_TITLE } from '#/config/constants'

import { PageHeading } from '#/components/PageHeading'
import { CodeExamples } from '#/components/CodeExamples'

import { data } from '#/data'

type Params = {
  slug: string[]
}

interface Context {
  params: Params
}

interface Props {
  params: Params
}

const fetchTemplate = async (ctx: Context) => {
  const { slug } = ctx.params
  if (!slug) {
    notFound()
  }

  const categoryId = slug.at(0)
  const category = data.find((item) => item.id === categoryId)

  const subCategoryId = slug.at(1)
  const subCategory = category?.children
    ?.filter((item) => item.id === subCategoryId)
    .at(0)

  const templates = subCategory?.children

  return {
    templates,
    category,
    subCategory,
  }
}

export const generateMetadata = async (ctx: Context): Promise<Metadata> => {
  const { slug } = ctx.params

  const categoryId = slug.at(0)
  const category = data.find((item) => item.id === categoryId)

  const subCategoryId = slug.at(1)
  const subCategory = category?.children
    ?.filter((item) => item.id === subCategoryId)
    .at(0)

  const title = `${category?.name}/${subCategory?.name} - ${SEO_TITLE}`

  return {
    title,
    openGraph: {
      title,
    },
    twitter: {
      title,
    },
  }
}

export const revalidate = 3600

const Templates = async (props: Props) => {
  const { templates, category, subCategory } = await fetchTemplate(props)

  return (
    <>
      <PageHeading name={subCategory?.name} description={subCategory?.description} />
      <CodeExamples templates={templates} category={category} subCategory={subCategory} />
    </>
  )
}

export default Templates
