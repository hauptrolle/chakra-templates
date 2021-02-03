import { useEffect, useRef } from 'react';
import { CodeBlock, a11yDark } from 'react-code-blocks';
import { Box, Button, useClipboard } from '@chakra-ui/react';
import { Category, SubCategory, Template } from '../data';

import {
  SPLITBEE_TEMPLATE_CLICK_COPY,
  SPLITBEE_TEMPLATE_MANUAL_COPY,
} from '../constants';

type CodeSampleProps = {
  template: Template;
  category: Category;
  subCategory: SubCategory;
};

export const CodeSample = ({
  template,
  category,
  subCategory,
}: CodeSampleProps) => {
  const code = require(`!!raw-loader!../pages/templates/${category.id}/${subCategory.id}/${template.filename}`)
    .default;
  const { hasCopied, onCopy } = useClipboard(code);
  const codeRef = useRef<HTMLDivElement>(null);

  const handleManualCopy = (event: ClipboardEvent) => {
    if (codeRef?.current?.contains(event.target as Node)) {
      // @ts-ignore TODO add type to window or use new splitbee/web package
      window.splitbee.track(SPLITBEE_TEMPLATE_MANUAL_COPY, {
        template: template.name,
      });
    }
  };

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      document.addEventListener('copy', handleManualCopy);
    }

    return () => {
      document.removeEventListener('copy', handleManualCopy);
    };
  }, []);

  return (
    <Box fontFamily={'mono'} fontSize={'sm'} position="relative" ref={codeRef}>
      <Button
        size="sm"
        position="absolute"
        top={4}
        right={4}
        onClick={onCopy}
        data-splitbee-event={SPLITBEE_TEMPLATE_CLICK_COPY}
        data-splitbee-event-template={template.name}>
        {hasCopied ? 'Copied 👌' : 'Copy'}
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
