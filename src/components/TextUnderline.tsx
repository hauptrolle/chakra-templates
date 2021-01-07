import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface TextUnderlineProps {
  children: ReactNode;
}

export const TextUnderline = ({ children }: TextUnderlineProps) => {
  return (
    <Box
      as={'span'}
      color={'green.400'}
      position={'relative'}
      zIndex={10}
      _after={{
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: 0,
        w: 'full',
        h: '30%',
        bg: 'green.100',
        zIndex: -1,
      }}>
      {children}
    </Box>
  );
};
