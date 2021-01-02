import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";

// Replace test data with your own
const features = Array.apply(null, Array(3)).map(function (x, i) {
  return {
    id: i,
    title: "Lorem ipsum dolor sit amet",
    text:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  };
});

export default function SimpleThreeColumns() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {features.map((feature) => (
          <Stack key={feature.id}>
            <Flex
              bg={"blue.400"}
              w={8}
              h={8}
              align={"center"}
              justify={"center"}
              color={"white"}
              rounded={"md"}
              mb={1}
            >
              <Icon as={ChatIcon} />
            </Flex>
            <Text fontWeight={600}>{feature.title}</Text>
            <Text color={"gray.600"}>{feature.text}</Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Box>
  );
}
