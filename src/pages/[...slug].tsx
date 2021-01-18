import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Stack, Heading } from '@chakra-ui/react';
import * as fs from 'fs';
import path from 'path';

import { DocsLayout } from '@/layout/DocsLayout';
import { Example } from '@/components/Example';
import { TEMPLATE_DIR } from '../constants';
import { data, Template, Category, SubCategory } from 'data';
import { NextSeo } from 'next-seo';

type PageProps = {
  category: Category;
  subCategory: SubCategory;
  templates?: Template[];
  code?: Record<string, string>;
};

const Templates: NextPage<PageProps> = ({
  category,
  subCategory,
  templates,
  code,
}) => {
  return (
    <DocsLayout>
      <NextSeo
        title={`${category.name}/${subCategory.name} - Chakra Templates`}
        description="Production-ready Chakra UI Templates for developers"
      />
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
          rel="stylesheet"
        />
      </Head>
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
            code={code![template.filename]}
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

  const code = templates?.reduce((prev, curr) => {
    const filePath = path.join(
      process.cwd(),
      `${TEMPLATE_DIR}/${category}/${subCategory}`
    );
    const content = fs.readFileSync(
      `${filePath}/${curr.filename}.tsx`,
      'utf-8'
    );
    return {
      ...prev,
      [curr.filename]: content,
    };
  }, {});

  return {
    props: {
      category: categoryData,
      subCategory: subCategoryData,
      templates,
      code,
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
