import { useEffect, useRef, useState } from 'react';
import { CodeBlock, a11yDark } from 'react-code-blocks';
import { Box, Button } from '@chakra-ui/react';
import copy from 'copy-to-clipboard';

import {
  SPLITBEE_TEMPLATE_CLICK_COPY,
  SPLITBEE_TEMPLATE_MANUAL_COPY,
} from '../constants';
import { Template } from '../data';

type CodeSampleProps = {
  code: string;
  template: Template;
};

export const CodeSample = ({ code, template }: CodeSampleProps) => {
  const initialText = 'Copy';
  const [copyButtonText, setCopyButtonText] = useState(initialText);
  const codeRef = useRef<HTMLDivElement>(null);

  const copyCode = () => {
    copy(code);

    setCopyButtonText('Copied 👌');
    setTimeout(() => {
      setCopyButtonText(initialText);
    }, 2000);
  };

  const handleManualCopy = (event: ClipboardEvent) => {
    if (codeRef?.current?.contains(event.target as Node)) {
      // @ts-ignore TODO add type to window or use new splitbee/web package
      window.splitbee.track(SPLITBEE_TEMPLATE_MANUAL_COPY, {
        template: template.name,
      });
    }
  };

  useEffect(() => {
    document.addEventListener('copy', handleManualCopy);

    return () => {
      document.removeEventListener('copy', handleManualCopy);
    };
  }, []);

  return (
    <Box
      fontFamily={"'Fira Code', monospace"}
      position="relative"
      ref={codeRef}>
      <Button
        size="sm"
        position="absolute"
        top={4}
        right={4}
        onClick={copyCode}
        data-splitbee-event={SPLITBEE_TEMPLATE_CLICK_COPY}
        data-splitbee-event-template={template.name}>
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
