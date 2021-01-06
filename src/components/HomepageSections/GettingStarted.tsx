import {
  Container,
  Heading,
  Text,
  Box,
  Stack,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";

const STEPS = [
  {
    title: "Find your template",
    text:
      "Every template is embedded within an iframe on the page, so you can easily check what they look like and test the responsive behaviour.",
  },
  {
    title: "Copy the code",
    text:
      "Just click the code tab to see the actual source code of the template. Copy and paste it into your project and your are ready to go!",
  },
  {
    title: "Enjoy your free time",
    text:
      "Your just saved yourself a bunch of time not building the same stuff over and over again. Enjoy your free time!",
  },
];

export const GettingStarted = () => {
  return (
    <Box bg={"gray.100"}>
      <Container maxW={"7xl"} py={{ base: 14, sm: 20, md: 32 }}>
        <Heading
          as={"h3"}
          textAlign={"center"}
          fontSize={"3xl"}
          mb={{ base: 14, sm: 20 }}
        >
          Getting started in{" "}
          <Box as={"span"} color={"green.400"}>
            3 easy steps
          </Box>
        </Heading>
        <SimpleGrid columns={[1, 1, 3]} spacing={{ base: 10, sm: 20 }}>
          {STEPS.map((step, index) => (
            <Stack spacing={4} key={step.title}>
              <Flex
                w={8}
                h={8}
                bg={"green.100"}
                color={"green.700"}
                fontWeight={700}
                align={"center"}
                justify={"center"}
                fontSize={"sm"}
                rounded={"md"}
              >
                0{index + 1}
              </Flex>
              <Text fontWeight={700}>{step.title}</Text>
              <Text>{step.text}</Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
