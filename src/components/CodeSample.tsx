import { useState } from "react";
import { CodeBlock, a11yDark } from "react-code-blocks";
import { Box, Button, Tooltip } from "@chakra-ui/react";
import copy from "copy-to-clipboard";

type CodeSampleProps = {
  code: string;
};

export const CodeSample = ({ code }: CodeSampleProps) => {
  const [copyTooltipOpen, setCopyTooltipOpen] = useState(false);

  const copyCode = () => {
    copy(code);
    setCopyTooltipOpen(true);
    setTimeout(() => {
      setCopyTooltipOpen(false);
    }, 2000);
  };

  return (
    <Box fontFamily={"'Fira Code', monospace"} position="relative">
      <Tooltip
        label="Copied 👌"
        aria-label="Copy confirmation"
        isOpen={copyTooltipOpen}
      >
        <Button
          size="sm"
          position="absolute"
          top={4}
          right={4}
          onClick={copyCode}
        >
          Copy
        </Button>
      </Tooltip>
      <CodeBlock
        text={code}
        language={"tsx"}
        theme={a11yDark}
        showLineNumbers={false}
      />
    </Box>
  );
};
