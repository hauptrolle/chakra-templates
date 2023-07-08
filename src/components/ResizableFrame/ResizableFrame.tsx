'use client'

import { useEffect, useRef, useState } from 'react'
import { Box, useColorMode } from '@chakra-ui/react'
import { Resizable } from 're-resizable'

import { getExampleUrl } from '#/utils/getExampleUrl'
import { Category, SubCategory, Template } from '../../data/types'

type IframeProps = {
  template: Template
  category: Category
  subCategory: SubCategory
}

const MIN_HEIGHT = 222

export const ResizableFrame = ({ template, category, subCategory }: IframeProps) => {
  const ref = useRef<HTMLIFrameElement>(null)
  const { colorMode } = useColorMode()

  const [height, setHeight] = useState<number | undefined>(undefined)
  const [exampleUrl, setExampleUrl] = useState('')

  useEffect(() => {
    if (!category || !subCategory || !template) {
      return
    }

    setExampleUrl(getExampleUrl(category, subCategory, template))
  }, [category, subCategory, template])

  const syncHeight = () => {
    const frameHeight = ref.current?.contentWindow?.document.body.offsetHeight

    setHeight(frameHeight)
  }

  // Reload iframe content when theme and colorMode changes
  useEffect(() => {
    ref.current?.contentWindow?.location.reload()
  }, [colorMode])

  const getHeight = () =>
    height !== undefined && height >= MIN_HEIGHT ? height : MIN_HEIGHT

  if (!exampleUrl) {
    return null
  }

  return (
    <Box bg={'gray.500'}>
      <Resizable
        bounds={'parent'}
        minWidth={250}
        minHeight={getHeight()}
        maxHeight={getHeight()}>
        <iframe
          loading={'lazy'}
          width={'100%'}
          height={getHeight()}
          src={exampleUrl}
          onLoad={syncHeight}
          ref={ref}
          title="#"
        />
      </Resizable>
    </Box>
  )
}
