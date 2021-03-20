import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { Heading, Stack } from '@chakra-ui/react';

import { DocsLayout } from '@/layout/DocsLayout';
import { SEO } from '@/components/SEO';
import { Preview } from '@/components/Preview';
import { data } from '../../../data';
import { SEO_TITLE } from '../../../constants';

interface SubCategoryPageProps {
  categoryName: string;
  subCategoryName: string;
}

export const SubCategoryPage: NextPage<SubCategoryPageProps> = ({
  categoryName,
  subCategoryName,
}) => {
  const { query } = useRouter();

  const pageData =
    data[query.category as string].children[query.subCategory as string];

  const seoTitle = `${categoryName}/${subCategoryName} - ${SEO_TITLE}`;

  return (
    <DocsLayout>
      <SEO title={seoTitle} ogTitle={seoTitle} twitterTitle={seoTitle} />

      <Stack mb={10}>
        <Heading size={'xl'}>{pageData.name}</Heading>
      </Stack>

      <Stack spacing={12}>
        {pageData.children.map((template) => (
          <Preview key={template.name} template={template} />
        ))}
      </Stack>
    </DocsLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(data)
    .map((category) => {
      return Object.keys(data[category].children)
        .map((subCategory) => [
          {
            params: {
              category,
              subCategory,
            },
          },
        ])
        .flat();
    })
    .flat();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  any,
  { category: string; subCategory: string }
> = async ({ params }) => {
  return {
    props: {
      categoryName: data[params!.category].name,
      subCategoryName:
        data[params!.category].children[params!.subCategory].name,
    },
  };
};

export default SubCategoryPage;
