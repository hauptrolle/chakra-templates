import { Box, Button, Image, Text, VStack, useMediaQuery} from "@chakra-ui/react";
import {useEffect} from 'react'

export default function imageWithTextAndCTA(){
  const [mdAndLg] = useMediaQuery("(min-width: 680px)")
  return (
    <Box w={"100vw"} pos={"relative"} h={mdAndLg ? "400px" : "250px"}>
      <Image src={"https://placeimg.com/1000/480/tech/grayscale"} w={"100%"} h={"100%"} objectFit={"cover"}/>
      <VStack align={"start"} pos={"absolute"} top={"0"} h={"100%"} justifyContent={"center"} spacing={"1.5rem"} pl={mdAndLg ? "3.5rem" : "1.5rem"} bg={"linear-gradient(0.25turn, rgba(49, 130, 206, 0.7),rgba(49, 130, 206, 0.6), rgba(0,0,0,0))"}>
        <Text color={"white"} fontWeight={"bold"} as={"p"} lineHeight={"1.2"} fontSize={mdAndLg ? "4xl" : "2xl"}>Lorem ipsum dolor sit amet<br/> consectetur adipiscing elit <br/>sed do eiusmod tempor</Text>
        <Button colorScheme={"orange"} size={mdAndLg ? "lg" : "md"}>Call to action text</Button>
      </VStack>
    </Box>
  )
};