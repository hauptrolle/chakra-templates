import { useState } from 'react';
import { CodeBlock, a11yDark } from 'react-code-blocks';
import { Box, Button } from '@chakra-ui/react';
import copy from 'copy-to-clipboard';

type CodeSampleProps = {
  code: string;
};

export const CodeSample = ({ code }: CodeSampleProps) => {
  const initialText = 'Copy';
  const [copyButtonText, setCopyButtonText] = useState(initialText);

  const copyCode = () => {
    copy(code);
    setCopyButtonText('Copied 👌');
    setTimeout(() => {
      setCopyButtonText(initialText);
    }, 2000);
  };

  return (
    <Box fontFamily={"'Fira Code', monospace"} position="relative">
      <Button
        size="sm"
        position="absolute"
        top={4}
        right={4}
        onClick={copyCode}>
        {copyButtonText}
      </Button>

      <CodeBlock
        text={code}
        language={'tsx'}
        theme={a11yDark}
        showLineNumbers={false}
      />
    </Box>
  );
};
