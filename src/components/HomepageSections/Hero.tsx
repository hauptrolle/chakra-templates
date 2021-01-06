import {
  Container,
  Stack,
  Box,
  Flex,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { IoArrowForward } from "react-icons/io5";

export const Hero = () => {
  return (
    <Stack
      as={Container}
      maxW={"7xl"}
      py={{ base: 14, sm: 20, md: 32 }}
      spacing={{ base: 10, md: 24 }}
      direction={{ base: "column", md: "row" }}
    >
      <Stack spacing={6} flex={2}>
        <Heading as={"h2"} fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}>
          <Box as={"span"} color={"green.400"}>
            Production-ready
          </Box>{" "}
          Chakra UI Templates for developers
        </Heading>
        <Text color={"gray.500"} fontSize={{ md: "lg" }}>
          A growing collection of hand-crafted Chakra UI templates ready to drop
          into your React project.
        </Text>
        <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
          <Button
            colorScheme={"green"}
            background={"green.400"}
            variant={"solid"}
            size={"lg"}
            rounded={"full"}
            rightIcon={<IoArrowForward />}
          >
            Browse Templates
          </Button>
          <Button
            colorScheme={"green"}
            variant={"ghost"}
            size={"lg"}
            rounded={"full"}
            color={"green.400"}
          >
            Suggest Templates
          </Button>
        </Stack>
      </Stack>

      {/* START Placeholder for the components animation */}
      <Flex
        justify={"center"}
        flex={1}
        p={4}
        bg={"white"}
        rounded={"lg"}
        boxShadow={"xl"}
        minH={100}
        minW={100}
      />
      {/* END Placeholder for the components animation */}
    </Stack>
  );
};
