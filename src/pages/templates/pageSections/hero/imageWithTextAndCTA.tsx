import {
  Box,
  Button,
  Image,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function ImageWithTextAndCTA() {
  const heroHeight = useBreakpointValue({ base: "250px", md: "400px" });
  const ctaSize = useBreakpointValue({ base: "md", md: "lg" });
  const heroTextSize = useBreakpointValue({ base: "2xl", md: "4xl" });
  const heroTextPadding = useBreakpointValue({ base: "1rem", md: "3.5rem" });

  return (
    <Box w={"100vw"} pos={"relative"} h={heroHeight}>
      <Image
        src={"https://placeimg.com/1000/480/tech/grayscale"}
        w={"100%"}
        h={"100%"}
        objectFit={"cover"}
      />
      <VStack
        align={"start"}
        pos={"absolute"}
        top={"0"}
        h={"100%"}
        justifyContent={"center"}
        spacing={"1.5rem"}
        pl={heroTextPadding}
        bg={
          "linear-gradient(0.25turn, rgba(49, 130, 206, 0.7),rgba(49, 130, 206, 0.6), rgba(0,0,0,0))"
        }
      >
        <Text
          color={"white"}
          fontWeight={"bold"}
          as={"p"}
          lineHeight={"1.2"}
          fontSize={heroTextSize}
        >
          Lorem ipsum dolor sit amet
          <br /> consectetur adipiscing elit <br />
          sed do eiusmod tempor
        </Text>
        <Button colorScheme={"orange"} size={ctaSize}>
          Call to action text
        </Button>
      </VStack>
    </Box>
  );
}
