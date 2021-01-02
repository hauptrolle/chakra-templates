import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";

export default function TextWithCallToAction() {
  return (
    <Container maxW={"5xl"}>
      <Stack as={Box} textAlign={"center"} py={8} px={4} spacing={6}>
        <Heading size={"2xl"}>
          This is the{" "}
          <Text as={"span"} color={"blue.500"}>
            main headline
          </Text>
        </Heading>
        <Text fontSize={"xl"} color={"gray.500"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </Text>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={4}
          width={"full"}
          justifyContent={"center"}
        >
          <Button colorScheme={"blue"}>Primary Action</Button>
          <Button>Secondary Action</Button>
        </Stack>
      </Stack>
    </Container>
  );
}
