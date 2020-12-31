import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { toSentenceCase } from "../utils";
import Link from "next/link";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { ResizableFrame } from "./ResizableFrame";
import { CodeSample } from "./CodeSample";

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
  const [tabState, setTabState] = useState<"preview" | "code">("preview");

  return (
    <Box key={template.name}>
      <Flex alignItems={"center"} justify={"space-between"} mb={4}>
        <Heading as={"h3"} color={"gray.700"} size={"sm"}>
          {toSentenceCase(template.name.split(".")[0])}
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
      </Flex>

      <Box boxShadow={"xl"}>
        <Box display={tabState === "preview" ? "block" : "none"}>
          <ResizableFrame
            src={`/templates/${category}/${subCategory}/${
              template.name.split(".")[0]
            }`}
          />
        </Box>
        <Box display={tabState === "code" ? "block" : "none"}>
          <CodeSample code={code} />
        </Box>
      </Box>
    </Box>
  );
};
