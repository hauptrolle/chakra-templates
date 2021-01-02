import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Container, Stack, Box, Flex, Text, Heading } from "@chakra-ui/react";
import * as fs from "fs";
import { DirectoryTree } from "directory-tree";

import { Header } from "@components/Header";
import { Example } from "@components/Example";
import { TEMPLATE_DIR } from "../constants";
import { toSentenceCase } from "@utils/toSentenceCase";
import { getDirectoryTree } from "@utils/getDirectoryTree";

type PageProps = {
  category: string;
  template: string;
  tree: DirectoryTree;
  code?: Record<string, string>;
};

const Templates: NextPage<PageProps> = ({ category, template, tree, code }) => {
  return (
    <>
      <Header />
      <Stack maxW={"6xl"} py={12} px={8} as={Container} spacing={12}>
        <Box>
          <Text color={"gray.600"} fontSize={"sm"} mb={2}>
            {toSentenceCase(category)}
          </Text>
          <Heading
            size={"lg"}
            fontWeight={600}
            as={Flex}
            alignItems={"baseline"}
            borderBottom={1}
            borderStyle={"solid"}
            borderColor={"gray.200"}
            mb={5}
            pb={5}
            _after={{
              ml: 3,
              content: '""',
              width: 4,
              height: 1,
              bgGradient: "linear(to-r, teal.200, blue.600)",
            }}
          >
            {toSentenceCase(template)}
          </Heading>
        </Box>

        {tree.children?.map((t) => (
          <Example
            key={t.name}
            template={t}
            category={category}
            subCategory={template}
            code={code![t.name]}
          />
        ))}
      </Stack>
    </>
  );
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const category = params && params.slug ? params.slug[0] : "";
  const template = params && params.slug ? params.slug[1] : "";

  const tree = getDirectoryTree(`${TEMPLATE_DIR}/${category}/${template}`);

  const code = tree.children?.reduce((prev, curr) => {
    const content = fs.readFileSync(curr.path, "utf-8");
    return {
      ...prev,
      [curr.name]: content,
    };
  }, {});

  return {
    props: {
      tree,
      category,
      template,
      code,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tree = getDirectoryTree();

  const paths = tree
    .children!.map((category) =>
      category
        .children!.map((template) => ({
          params: {
            slug: [category.name, template.name],
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
