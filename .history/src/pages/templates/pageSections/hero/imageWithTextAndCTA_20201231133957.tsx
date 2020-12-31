import { Box, Button, Image, Text, VStack, useBreakpointValue} from "@chakra-ui/react";
import {useEffect,useState} from 'react'

export default function imageWithTextAndCTA(){
  const mdAndLg = true;
  const height = useBreakpointValue({ base: "250px", md: "400px" })
  const btnSize = useBreakpointValue({ base: "md", md: "lg" })
  const fontSize = useBreakpointValue({ base: "2xl", md: "4xl" })
  const fontSize = useBreakpointValue({ base: "2xl", md: "4xl" })
  return (
    <Box w={"100vw"} pos={"relative"} h={height}>
      <Image src={"https://placeimg.com/1000/480/tech/grayscale"} w={"100%"} h={"100%"} objectFit={"cover"}/>
      <VStack align={"start"} pos={"absolute"} top={"0"} h={"100%"} justifyContent={"center"} spacing={"1.5rem"} pl={mdAndLg ? "3.5rem" : "1.5rem"} bg={"linear-gradient(0.25turn, rgba(49, 130, 206, 0.7),rgba(49, 130, 206, 0.6), rgba(0,0,0,0))"}>
        <Text color={"white"} fontWeight={"bold"} as={"p"} lineHeight={"1.2"} fontSize={fontSize}>Lorem ipsum dolor sit amet<br/> consectetur adipiscing elit <br/>sed do eiusmod tempor</Text>
        <Button colorScheme={"orange"} size={btnSize}>Call to action text</Button>
      </VStack>
    </Box>
  )
};