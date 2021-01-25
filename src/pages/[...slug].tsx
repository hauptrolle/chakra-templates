import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Stack, Heading } from '@chakra-ui/react';

import { DocsLayout } from '@/layout/DocsLayout';
import { Example } from '@/components/Example';
import { SEO_TITLE } from '../constants';
import { data, Template, Category, SubCategory } from 'data';
import { SEO } from '@/components/SEO';

type PageProps = {
  category: Category;
  subCategory: SubCategory;
  templates?: Template[];
};

const Templates: NextPage<PageProps> = ({
  category,
  subCategory,
  templates,
}) => {
  const seoTitle = `${category.name}/${subCategory.name} - ${SEO_TITLE}`;

  return (
    <DocsLayout>
      <SEO title={seoTitle} ogTitle={seoTitle} twitterTitle={seoTitle} />
      <Heading size={'lg'} mb={6}>
        {subCategory.name}
      </Heading>
      <Stack spacing={12}>
        {templates?.map((template) => (
          <Example
            key={template.filename}
            template={template}
            category={category}
            subCategory={subCategory}
          />
        ))}
      </Stack>
    </DocsLayout>
  );
};

export const getStaticProps: GetStaticProps<
  PageProps,
  { slug: string[] }
> = async ({ params }) => {
  const category = params!.slug[0];
  const subCategory = params!.slug[1];

  const categoryData = data.filter((c) => c.id === category)[0];
  const subCategoryData = categoryData.children!.filter(
    (s) => s.id === subCategory
  )[0];
  const templates = subCategoryData.children;

  return {
    props: {
      category: categoryData,
      subCategory: subCategoryData,
      templates,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // TODO get rid of ! operator and make more failsafe
  const paths = data
    .map((category) =>
      category
        .children!.map((subCategory) => ({
          params: {
            slug: [category.id, subCategory.id],
          },
        }))
        .flat()
    )
    .flat();

  return {
    paths: paths,
    fallback: false,
  };
};

export default Templates;
