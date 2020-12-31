import { Box, Image, Text} from "@chakra-ui/react";

export default function imageWithTextAndCTA(){
  return (
    <Box w={"100vw"} pos={"relative"}>
      <Image src={"https://placeimg.com/1000/480/nature"} w={"100%"} h={"50vh"} objectFit={"cover"}/>
      <Box pos={"absolute"} top={}>
        <Text as={"p"} lineHeight={"1.2"} fontSize={"4xl"}>Lorem ipsum dolor sit amet consectur</Text>
      </Box>
    </Box>
  )
};