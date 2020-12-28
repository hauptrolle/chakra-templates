import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import {
  Container,
  Heading,
  Text,
  Box,
  Stack,
  HStack,
  Button,
  DarkMode,
  Tag,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import path from "path";
import directoryTree, { DirectoryTree } from "directory-tree";

type PageProps = {
  tree: DirectoryTree;
};

const Home: NextPage<PageProps> = ({ tree }) => {
  return (
    <>
      <Head>
        <title>
          Chakra Templates - A collection of responsive Chakra UI Templates
        </title>
        <meta
          name={"description"}
          content={
            "A collection of responsive Chakra UI Templates ready to drop into your React project"
          }
        />
      </Head>
      <DarkMode>
        <Box bg={"gray.800"} color={"white"}>
          <Stack as={Container} maxW={"6xl"} spacing={8} py={12} px={8}>
            <Heading as={"h1"} size={"2xl"}>
              Chakra Templates
            </Heading>
            <Text color={"gray.300"} maxW={"2xl"} lineHeight={1.8}>
              A collection of <strong>responsive Chakra UI Templates</strong>{" "}
              ready to drop into your React project. <br /> Don't waste your
              time, building the same layouts over and over again. Just copy and
              paste the code, and you are ready to go ✌️
            </Text>
            <Box>
              <HStack spacing={6}>
                <Button
                  variant="outline"
                  colorScheme={"green"}
                  leftIcon={<ArrowDownIcon />}
                >
                  Browse Components
                </Button>
                <Button variant="ghost" colorScheme={"green"}>
                  Suggest Template
                </Button>
              </HStack>
            </Box>
          </Stack>
        </Box>
      </DarkMode>
      <Stack maxW={"6xl"} py={12} px={8} as={Container} spacing={12}>
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
                  <Text as={"h3"} fontWeight={600}>
                    {template.name}
                  </Text>
                  <Text color={"gray.600"} fontSize={"sm"}>
                    {template.children?.length} Components
                  </Text>
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
