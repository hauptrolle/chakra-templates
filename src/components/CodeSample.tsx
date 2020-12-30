import { CodeBlock, a11yDark } from "react-code-blocks";
import { Box } from "@chakra-ui/react";

type CodeSampleProps = {
  code: string;
};

export const CodeSample = ({ code }: CodeSampleProps) => {
  return (
    <Box fontFamily={"'Fira Code', monospace"}>
      <CodeBlock
        text={code}
        language={"tsx"}
        theme={a11yDark}
        showLineNumbers={false}
      />
    </Box>
  );
};
