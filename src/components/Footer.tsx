import { Container, Flex, Box, Stack, Text } from "@chakra-ui/react";
import { BigHead } from "@bigheads/core";

export const Footer = () => {
  return (
    <Container
      fontSize={"sm"}
      maxW={"6xl"}
      py={12}
      px={8}
      as={Stack}
      direction={{ base: "column", md: "row" }}
      justify={"space-between"}
      alignItems={"center"}
      borderTop={1}
      borderStyle={"solid"}
      borderColor={"gray.100"}
    >
      <Box>Build with Chakra UI & Next.js</Box>
      <Flex
        alignItems={"center"}
        as={"a"}
        href={"http://hauptrolle.me/"}
        _hover={{
          color: "teal.400",
        }}
      >
        <Text as={"span"}>by Achim Rolle</Text>
        <Box
          mt={-4}
          minW={12}
          as={BigHead}
          accessory="none"
          body="chest"
          circleColor="blue"
          clothing="shirt"
          clothingColor="black"
          eyebrows="leftLowered"
          eyes="simple"
          faceMask
          faceMaskColor="black"
          facialHair="none"
          graphic="react"
          hair="short"
          hairColor="brown"
          hat="none"
          hatColor="black"
          lashes={false}
          lipColor="turqoise"
          mask={false}
          mouth="grin"
          skinTone="light"
        />
      </Flex>
    </Container>
  );
};
