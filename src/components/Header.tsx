import {
  Box,
  Button,
  Container,
  DarkMode,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Head from "next/head";

export const Header = () => {
  return (
    <DarkMode>
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
      <Box bg={"gray.800"} color={"white"}>
        <Stack as={Container} maxW={"6xl"} spacing={10} py={12} px={8}>
          <Box>
            <Heading
              display={"inline"}
              as={"h1"}
              size={"2xl"}
              bgGradient="linear(to-r, teal.200, blue.600)"
              bgClip="text"
            >
              Chakra Templates
            </Heading>
          </Box>
          <Text
            color={"gray.300"}
            maxW={"2xl"}
            lineHeight={1.8}
            fontSize={"lg"}
          >
            A growing collection of{" "}
            <strong>responsive Chakra UI Templates</strong> ready to drop into
            your React project. <br /> Don't waste your time, building the same
            templates over and over again. Just copy and paste the code, and you
            are ready to go ✌️
          </Text>
          <Box>
            <HStack spacing={6}>
              <Link href={"/#components"} passHref={true}>
                <Button
                  variant="outline"
                  colorScheme={"teal"}
                  leftIcon={<ArrowDownIcon />}
                  as={"a"}
                >
                  Browse Components
                </Button>
              </Link>
              <Button variant="ghost" colorScheme={"teal"}>
                Suggest Template
              </Button>
            </HStack>
          </Box>
        </Stack>
      </Box>
    </DarkMode>
  );
};
