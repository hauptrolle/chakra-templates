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
import * as fs from "fs";
import { CodeSample } from "../components/CodeSample";

type PageProps = {
  category: string;
  template: string;
  tree: DirectoryTree;
  code?: Record<string, string>;
};

const Templates: NextPage<PageProps> = ({ category, template, tree, code }) => {
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
          <Box key={t.name}>
            <Flex alignItems={"center"} justify={"space-between"} mb={4}>
              <Heading as={"h3"} color={"gray.700"} size={"sm"}>
                {toSentenceCase(t.name.split(".")[0])}
              </Heading>
              <HStack spacing={4}>
                <Button
                  size={"sm"}
                  bg={tabState === "preview" ? "teal.100" : undefined}
                  color={tabState === "preview" ? "teal.700" : undefined}
                  _hover={{
                    bg: tabState === "preview" ? "teal.100" : undefined,
                  }}
                  onClick={() => setTabState("preview")}
                >
                  Preview
                </Button>
                <Button
                  size={"sm"}
                  bg={tabState === "code" ? "teal.100" : undefined}
                  color={tabState === "code" ? "teal.700" : undefined}
                  _hover={{
                    bg: tabState === "code" ? "teal.100" : undefined,
                  }}
                  onClick={() => setTabState("code")}
                >
                  Code
                </Button>
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
                    size={"sm"}
                    aria-label={"Open in Fullscreen"}
                    title={"Open in Fullscreen"}
                  />
                </Link>
              </HStack>
            </Flex>

            <Box boxShadow={"xl"}>
              <Box display={tabState === "preview" ? "block" : "none"}>
                <ResizableFrame
                  src={`/templates/${category}/${template}/${
                    t.name.split(".")[0]
                  }`}
                />
              </Box>
              <Box display={tabState === "code" ? "block" : "none"}>
                {code ? <CodeSample code={code[t.name]} /> : null}
              </Box>
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
    `${TEMPLATE_DIR}/${category}/${template}`
  );
  const tree = directoryTree(componentsDir);

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
