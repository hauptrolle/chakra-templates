import {
  Box,
  Heading,
  HStack,
  IconButton,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Link from "next/link";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import { toSentenceCase } from "@/utils/toSentenceCase";
import { ResizableFrame } from "@/components/ResizableFrame";
import { CodeSample } from "@/components/CodeSample";

type ExampleProps = {
  template: any;
  code: string;
  category: string;
  subCategory: string;
};

export const Example = ({
  template,
  code,
  category,
  subCategory,
}: ExampleProps) => {
  return (
    <Box key={template.name} bg={"gray.100"} padding={4} rounded={"md"}>
      <Tabs variant="soft-rounded" colorScheme="teal" size={"sm"}>
        <TabList
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Heading
            as={"h3"}
            color={"gray.700"}
            size={"sm"}
            mb={{ base: 4, md: 0 }}
          >
            {toSentenceCase(template.name.split(".")[0])}
          </Heading>
          <HStack spacing={4}>
            <Tab>Preview</Tab>
            <Tab>Code</Tab>
            <Link
              href={`/templates/${category}/${subCategory}/${
                template.name.split(".")[0]
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
                target="_blank"
              />
            </Link>
          </HStack>
        </TabList>
        <TabPanels boxShadow={"xl"}>
          <TabPanel px={0} pb={0}>
            <ResizableFrame
              src={`/templates/${category}/${subCategory}/${
                template.name.split(".")[0]
              }`}
            />
          </TabPanel>
          <TabPanel px={0} pb={0}>
            <CodeSample code={code} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
