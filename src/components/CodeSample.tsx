import { CodeBlock, a11yDark } from 'react-code-blocks';
import { Box, Button, useClipboard } from '@chakra-ui/react';
import { Category, SubCategory, Template } from '../data';

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

  return (
    <Box fontFamily={'mono'} fontSize={'sm'} position="relative">
      <Button size="sm" position="absolute" top={4} right={4} onClick={onCopy}>
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
