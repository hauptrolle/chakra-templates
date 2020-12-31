import { Box, Image, Container} from "@chakra-ui/react";

export default function imageWithTextAndCTA(){
  return (
    <Container w="100vw">
      <Image src="https://placeimg.com/1000/480/nature" w="100%" h="50vh" objectFit="cover"/>
    </Container>
  )
};