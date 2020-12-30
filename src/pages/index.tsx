import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import {
  Container,
  Heading,
  Text,
  Box,
  Stack,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import path from "path";
import directoryTree, { DirectoryTree } from "directory-tree";

import { TEMPLATE_DIR } from "../constants";
import { Header } from "../components/Header";
import { toSentenceCase } from "../utils";
import { Steps } from "../components/Steps";
import { Footer } from "../components/Footer";

type PageProps = {
  tree: DirectoryTree;
};

const Home: NextPage<PageProps> = ({ tree }) => {
  return (
    <>
      <Header />
      <Steps />
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
              alignItems={"baseline"}
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
              {toSentenceCase(category.name)}
            </Heading>

            {category.children?.length === 0 ? (
              <Flex
                w={"full"}
                bg={"gray.100"}
                h={24}
                alignItems={"center"}
                justifyContent={"center"}
                textAlign={"center"}
                color={"gray.500"}
                mb={4}
                p={2}
                rounded={"md"}
              >
                Nothing here yet. Components coming soon.
              </Flex>
            ) : null}

            <SimpleGrid columns={[1, 1, 3]} spacing={10}>
              {category.children?.map((template) => (
                <Box key={template.name}>
                  <Link href={`/${category.name}/${template.name}`}>
                    <a role="group">
                      <Flex
                        w={"full"}
                        bg={"gray.100"}
                        h={24}
                        alignItems={"center"}
                        justifyContent={"center"}
                        textAlign={"center"}
                        color={"gray.500"}
                        mb={4}
                        p={2}
                        rounded={"md"}
                        transition={"all .3s ease"}
                        _groupHover={{
                          boxShadow: "xl",
                        }}
                      >
                        Preview image coming soon.
                      </Flex>
                      <Text as={"h3"} fontWeight={600}>
                        {toSentenceCase(template.name)}
                      </Text>
                      <Text color={"gray.600"} fontSize={"sm"}>
                        {template.children?.length}{" "}
                        {template.children?.length === 1
                          ? "Component"
                          : "Components"}
                      </Text>
                    </a>
                  </Link>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        ))}
      </Stack>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const componentsDir = path.join(process.cwd(), TEMPLATE_DIR);
  const tree = directoryTree(componentsDir);

  return {
    props: {
      tree,
    },
  };
};

export default Home;
