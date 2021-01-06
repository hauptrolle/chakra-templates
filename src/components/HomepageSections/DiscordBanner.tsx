import {
  chakra,
  Container,
  Text,
  Box,
  Stack,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { DISCORD_INVITE_LINK } from "../../constants";
import { IoLogoDiscord } from "react-icons/io5";

export const DiscordBanner = () => {
  return (
    <Box bg={"discord"} color={"white"}>
      <Container
        as={Stack}
        maxW={"7xl"}
        py={{ base: 4, sm: 8 }}
        spacing={8}
        direction={{ base: "column", md: "row" }}
      >
        <Stack
          spacing={4}
          flex={1}
          direction={{ base: "column", sm: "row" }}
          align={{ sm: "center" }}
        >
          <Icon as={IoLogoDiscord} w={10} h={10} />
          <Stack spacing={0}>
            <Text fontFamily={"heading"} fontSize={"lg"}>
              Talk with us
            </Text>
            <Text opacity={0.7} fontSize={"sm"}>
              We’ve setup a Discord server where you can ask questions, report
              bugs, or request templates!
            </Text>
          </Stack>
        </Stack>
        <Flex align={"center"}>
          <chakra.a
            bg={"white"}
            color={"gray.700"}
            rounded={"full"}
            p={4}
            px={6}
            fontWeight={700}
            transition={"all .3s ease"}
            href={DISCORD_INVITE_LINK}
            target={"_blank"}
            _hover={{
              boxShadow: "lg",
            }}
          >
            Join the Discord Server
          </chakra.a>
        </Flex>
      </Container>
    </Box>
  );
};
