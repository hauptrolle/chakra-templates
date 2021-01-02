import {
  SimpleGrid,
  Flex,
  Heading,
  Container,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";

export default function WithImage() {
  return (
    <Container maxW={"6xl"}>
      <SimpleGrid py={8} px={4} spacing={6} columns={{ base: 1, md: 2 }}>
        <Stack spacing={8} maxW={{ md: "xl" }}>
          <Heading size={"2xl"}>
            This is the{" "}
            <Text as={"span"} color={"blue.500"}>
              main headline
            </Text>
          </Heading>
          <Text fontSize={"xl"} color={"gray.500"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button colorScheme={"blue"}>Primary Action</Button>
            <Button>Secondary Action</Button>
          </Stack>
        </Stack>

        <Flex alignItems={"center"} justifyContent={"center"}>
          <img
            src={"https://via.placeholder.com/400x250"}
            width={400}
            height={250}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
