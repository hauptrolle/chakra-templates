import Head from "next/head";
import {
  Container,
  Heading,
  Text,
  Box,
  Stack,
  HStack,
  Button,
  DarkMode,
} from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";

const Home = () => {
  return (
    <>
      <Head>
        <title>
          Chakra Templates - A collection of responsive Chakra UI Templates
        </title>
        <meta
          name={"description"}
          content={
            "A collection of responsive Chakra UI Templates ready to drop into your React project"
          }
        />
      </Head>
      <DarkMode>
        <Box bg={"gray.800"} color={"white"} py={12} px={8}>
          <Stack as={Container} maxW={"5xl"} spacing={8}>
            <Heading size={"2xl"}>Chakra Templates</Heading>
            <Text color={"gray.300"} maxW={"2xl"} lineHeight={1.8}>
              A collection of <strong>responsive Chakra UI Templates</strong>{" "}
              ready to drop into your React project. <br /> Don't waste your
              time, building the same layouts over and over again. Just copy and
              paste the code, and you are ready to go ✌️
            </Text>
            <Box>
              <HStack spacing={6}>
                <Button
                  variant="outline"
                  colorScheme={"green"}
                  leftIcon={<ArrowDownIcon />}
                >
                  Browse Components
                </Button>
                <Button variant="ghost" colorScheme={"green"}>
                  View on GitHub
                </Button>
              </HStack>
            </Box>
          </Stack>
        </Box>
      </DarkMode>
    </>
  );
};

export default Home;
