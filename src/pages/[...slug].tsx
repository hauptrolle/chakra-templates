import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Container, Stack, Box, Flex, Text, Heading } from '@chakra-ui/react';
import * as fs from 'fs';
import path from 'path';

import { Example } from '@/components/Example';
import { TEMPLATE_DIR } from '../constants';
import { data, Template, Category, SubCategory } from 'data';

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
    <>
      <Stack maxW={'6xl'} py={12} px={8} as={Container} spacing={12}>
        <Box>
          <Text color={'gray.600'} fontSize={'sm'} mb={2}>
            {category.name}
          </Text>
          <Heading
            size={'lg'}
            fontWeight={600}
            as={Flex}
            alignItems={'baseline'}
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={'gray.200'}
            mb={5}
            pb={5}
            _after={{
              ml: 3,
              content: '""',
              width: 4,
              height: 1,
              bgGradient: 'linear(to-r, teal.200, blue.600)',
            }}>
            {subCategory.name}
          </Heading>
        </Box>

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
    </>
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
