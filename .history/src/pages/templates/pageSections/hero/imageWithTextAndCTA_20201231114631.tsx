import { Box, Image, Container} from "@chakra-ui/react";

export default function imageWithTextAndCTA(){
  return (
    <Box w="100vw" p>
      <Image src="https://placeimg.com/1000/480/nature" w="100%" h="50vh" objectFit="cover"/>
    </Box>
  )
};