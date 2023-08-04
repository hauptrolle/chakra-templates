'use client'

import { useEffect, useRef, useCallback } from 'react'
import { CodeBlock, a11yDark } from 'react-code-blocks'
import { Box, Button, useClipboard } from '@chakra-ui/react'
import splitbee from '@splitbee/web'

import {
  SPLITBEE_TEMPLATE_CLICK_COPY,
  SPLITBEE_TEMPLATE_MANUAL_COPY,
} from '#/config/constants'
import { Category, SubCategory, Template } from '#/data/types'

interface Props {
  template: Template
  category: Category
  subCategory: SubCategory
}

export const CodeSample = (props: Props) => {
  const { template, category, subCategory } = props
  const code =
    require(`!!raw-loader!../../app/(documentation)/templates/${category.id}/${subCategory.id}/${template.filename}/page.tsx`).default
  const { hasCopied, onCopy } = useClipboard(code)
  const codeRef = useRef<HTMLDivElement>(null)

  const handleManualCopy = useCallback(
    (event: ClipboardEvent) => {
      if (codeRef?.current?.contains(event.target as Node)) {
        splitbee.track(SPLITBEE_TEMPLATE_MANUAL_COPY, {
          template: template.name,
        })
      }
    },
    [template.name],
  )

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      document.addEventListener('copy', handleManualCopy)
    }

    return () => {
      document.removeEventListener('copy', handleManualCopy)
    }
  }, [handleManualCopy])

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
        startingLineNumber={0}
        wrapLongLines
        showLineNumbers={false}
      />
    </Box>
  )
}
