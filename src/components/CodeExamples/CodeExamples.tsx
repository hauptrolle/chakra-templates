'use client'

import { Stack } from '@chakra-ui/react'

import { Example } from '../Example'

import type { Template } from '#/data/types'

interface Props {
  templates?: Template[]
  category: any
  subCategory: any
}

export const CodeExamples = (props: Props) => {
  const { templates, category, subCategory } = props

  return (
    <Stack spacing={12}>
      {templates?.map((template) => (
        <Example
          key={template.filename}
          template={template}
          category={category}
          subCategory={subCategory}
        />
      ))}
    </Stack>
  )
}
