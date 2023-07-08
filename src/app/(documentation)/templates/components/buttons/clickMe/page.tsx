'use client'

import { useState } from 'react'
import { Button, Flex, useColorModeValue } from '@chakra-ui/react'

function randomColor() {
  return Math.floor(Math.random() * 5)
}

const colorList: string[] = ['#E53E3E', '#38A169', '#00B5D8', '#44337A', '#ED64A6']

export default function ClickMe() {
  const [colorCode, setColorCode] = useState(colorList[randomColor()])

  return (
    <Flex h="100vh" justifyContent="center" alignItems="center" bgColor={`${colorCode}`}>
      <Button
        px={8}
        bg={useColorModeValue('#151f21', 'gray.900')}
        color={'white'}
        rounded={'md'}
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg'
        }}
        onClick={() => setColorCode(colorList[randomColor()])}>
        Click Me
      </Button>
    </Flex>
  )
}
