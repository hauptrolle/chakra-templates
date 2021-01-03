import { Box, Flex, Container, SimpleGrid, Text } from "@chakra-ui/react";

const CONTENT = [
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

export const Steps = () => {
  return (
    <Box bgGradient="linear(to-b, gray.200, white)">
      <Container maxW={"6xl"} py={{ base: 12, md: 24 }} px={8}>
        <SimpleGrid columns={[1, 1, CONTENT.length]} spacing={10}>
          {CONTENT.map((c, i) => (
            <Box key={c.title}>
              <Flex
                w={8}
                h={8}
                bgGradient={"linear(to-r, teal.100, blue.100)"}
                color={"teal.600"}
                rounded={"full"}
                alignItems={"center"}
                justify={"center"}
                mr={4}
                fontSize={"sm"}
                fontWeight={600}
                mb={2}
              >
                {i + 1}
              </Flex>
              <Box>
                <Text fontSize={"xl"} fontWeight={600}>
                  {c.title}
                </Text>
                <Text color={"gray.600"} mt={2}>
                  {c.text}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
