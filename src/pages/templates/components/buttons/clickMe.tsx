import { Button, ButtonProps, Flex, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';

function randomColorNumber(min: number = 0, max: number = 256) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function ClickMe(props: ButtonProps) {
  const [colorCode, setColorCode] = useState(randomColorNumber());

  return (
    <Flex
      h="100vh"
      justifyContent="center"
      alignItems="center"
      bgColor={`rgb(${colorCode}, ${colorCode}, ${colorCode})`}>
      <Button
        {...props}
        px={8}
        bg={useColorModeValue('#151f21', 'gray.900')}
        color={'white'}
        rounded={'md'}
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        }}
        onClick={() => setColorCode(randomColorNumber())}>
        Follow
      </Button>
    </Flex>
  );
}
