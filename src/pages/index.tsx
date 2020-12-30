import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
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
              {category.children?.map((subCategory) => (
                <Box key={subCategory.name}>
                  <Link href={`/${category.name}/${subCategory.name}`}>
                    <a role="group">
                      <Flex
                        w={"full"}
                        bg={"gray.50"}
                        h={28}
                        position={"relative"}
                        mb={4}
                        rounded={"md"}
                        overflow={"hidden"}
                        transition={"all .3s ease"}
                        _groupHover={{
                          boxShadow: "xl",
                        }}
                        border={1}
                        borderStyle={"solid"}
                        borderColor={"gray.100"}
                        style={{
                          filter: "blur(0.8px) grayscale(1)",
                        }}
                      >
                        <Image
                          src={`/preview/${category.name}-${subCategory.name}.png`}
                          layout={"fill"}
                          objectFit={"contain"}
                        />
                      </Flex>
                      <Text as={"h3"} fontWeight={600}>
                        {toSentenceCase(subCategory.name)}
                      </Text>
                      <Text color={"gray.600"} fontSize={"sm"}>
                        {subCategory.children?.length}{" "}
                        {subCategory.children?.length === 1
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
