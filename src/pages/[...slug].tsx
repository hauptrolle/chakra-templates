import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import {
  Container,
  Stack,
  Box,
  Flex,
  Text,
  Heading,
  HStack,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import directoryTree, { DirectoryTree } from "directory-tree";
import path from "path";

import { Header } from "../components/Header";
import { ResizableFrame } from "../components/ResizableFrame";
import { TEMPLATE_DIR } from "../constants";
import { toSentenceCase } from "../utils";
import { useState } from "react";

type PageProps = {
  category: string;
  template: string;
  tree: DirectoryTree;
};

const Templates: NextPage<PageProps> = ({ category, template, tree }) => {
  const [tabState, setTabState] = useState<"preview" | "code">("preview");

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
            alignItems={"center"}
            borderBottom={1}
            borderStyle={"solid"}
            borderColor={"gray.200"}
            mb={5}
            pb={5}
          >
            {toSentenceCase(template)}
          </Heading>
        </Box>

        {tree.children?.map((t) => (
          <Box
            key={t.name}
            rounded={"md"}
            border={1}
            borderColor={"gray.200"}
            borderStyle={"solid"}
          >
            <Box p={4}>
              <Flex alignItems={"center"} justify={"space-between"}>
                <Heading as={"h3"} fontWeight={400} size={"md"}>
                  {toSentenceCase(t.name.split(".")[0])}
                </Heading>
                <HStack>
                  <Button
                    size={"sm"}
                    colorScheme={tabState === "preview" ? "green" : undefined}
                    onClick={() => setTabState("preview")}
                  >
                    Preview
                  </Button>
                  <Button size={"sm"}>Code</Button>
                  <Link
                    href={`/templates/${category}/${template}/${
                      t.name.split(".")[0]
                    }`}
                    passHref
                  >
                    <IconButton
                      as={"a"}
                      cursor={"pointer"}
                      icon={<ExternalLinkIcon />}
                      size={"xs"}
                      aria-label={"Open in Fullscreen"}
                      title={"Open in Fullscreen"}
                    />
                  </Link>
                </HStack>
              </Flex>
            </Box>
            <ResizableFrame
              src={`/templates/${category}/${template}/${t.name.split(".")[0]}`}
            />
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
    `${TEMPLATE_DIR}/${category}/${template}`
  );
  const tree = directoryTree(componentsDir);

  return {
    props: {
      tree,
      category,
      template,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const componentsDir = path.join(process.cwd(), TEMPLATE_DIR);
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
