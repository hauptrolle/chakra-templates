import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Container, Stack, Box, Flex, Text, Heading } from "@chakra-ui/react";
import directoryTree, { DirectoryTree } from "directory-tree";
import path from "path";

import { Header } from "../internalComponents/Header";

type PageProps = {
  category: string;
  template: string;
  tree: DirectoryTree;
};

const Templates: NextPage<PageProps> = ({ category, template, tree }) => {
  return (
    <>
      <Header />
      <Stack maxW={"6xl"} py={12} px={8} as={Container} spacing={12}>
        <Box>
          <Text color={"gray.600"} fontSize={"sm"} mb={2}>
            {category}
          </Text>
          <Heading
            size={"lg"}
            fontWeight={600}
            as={Flex}
            alignItems={"center"}
            borderBottom={1}
            borderStyle={"solid"}
            borderColor={"gray.200"}
            mb={5}
            pb={5}
            textTransform={"capitalize"}
          >
            {template}
          </Heading>
        </Box>

        {tree.children?.map((template) => (
          <Box
            key={template.name}
            rounded={"md"}
            border={1}
            borderColor={"gray.200"}
            borderStyle={"solid"}
          >
            <Box p={4} minH={20}>
              <Heading as={"h3"} fontWeight={400} size={"md"}>
                {template.name}
              </Heading>
            </Box>
          </Box>
        ))}
      </Stack>
    </>
  );
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const category = params && params.slug ? params.slug[0] : "";
  const template = params && params.slug ? params.slug[1] : "";

  const componentsDir = path.join(
    process.cwd(),
    `src/components/${category}/${template}`
  );
  const tree = directoryTree(componentsDir);
  console.log(tree);

  return {
    props: {
      tree,
      category,
      template,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const componentsDir = path.join(process.cwd(), "src/components");
  const tree = directoryTree(componentsDir);

  // Todo fix type :/
  const paths: any = tree.children
    ?.map((category) =>
      category.children
        ?.map((template) => ({
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
