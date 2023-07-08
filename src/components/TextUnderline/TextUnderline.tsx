'use client'

import { Box, useColorModeValue } from '@chakra-ui/react'

interface TextUnderlineProps {
  children: React.ReactNode
}

export const TextUnderline = ({ children }: TextUnderlineProps) => {
  return (
    <Box
      as={'span'}
      color={useColorModeValue('green.400', 'green.300')}
      position={'relative'}
      zIndex={10}
      _after={{
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: 0,
        w: 'full',
        h: '30%',
        bg: useColorModeValue('green.100', 'green.900'),
        zIndex: -1
      }}>
      {children}
    </Box>
  )
}
