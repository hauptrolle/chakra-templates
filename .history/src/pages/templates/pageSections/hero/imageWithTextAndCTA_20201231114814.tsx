import { Box, Image, Container, Text} from "@chakra-ui/react";

export default function imageWithTextAndCTA(){
  return (
    <Box w={"100vw"} pos={"relative"}>
      <Image src={"https://placeimg.com/1000/480/nature"} w={"100%"} h={"50vh"} objectFit={"cover"}/>
      <Box pos={"absolute"}>
        <Text>Lorem ipsum dolor sit amet consectur</Text>
      </Box>
    </Box>
  )
};