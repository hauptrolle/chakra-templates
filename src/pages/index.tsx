import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import {
  Container,
  Heading,
  Text,
  Box,
  Stack,
  Tag,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import path from "path";
import directoryTree, { DirectoryTree } from "directory-tree";

import { Header } from "../internalComponents/Header";

type PageProps = {
  tree: DirectoryTree;
};

const Home: NextPage<PageProps> = ({ tree }) => {
  return (
    <>
      <Header />
      <Stack
        maxW={"6xl"}
        py={12}
        px={8}
        as={Container}
        spacing={20}
        id={"components"}
      >
        {tree.children?.map((category) => (
          <Box key={category.name}>
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
            >
              {category.name}
              <Tag ml={3} size={"sm"} colorScheme={"green"}>
                New
              </Tag>
            </Heading>
            <SimpleGrid columns={[1, 1, 3]} spacing={10}>
              {category.children?.map((template) => (
                <Box key={template.name}>
                  <Link href={`/${category.name}/${template.name}`}>
                    <a>
                      <Text as={"h3"} fontWeight={600}>
                        {template.name}
                      </Text>
                      <Text color={"gray.600"} fontSize={"sm"}>
                        {template.children?.length} Components
                      </Text>
                    </a>
                  </Link>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        ))}
      </Stack>
    </>
  );
};

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const componentsDir = path.join(process.cwd(), "src/components");
  const tree = directoryTree(componentsDir);

  return {
    props: {
      tree,
    },
  };
};

export default Home;
