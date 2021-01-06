import Link from "next/link";

import { Box, Container, Heading, IconButton, Stack } from "@chakra-ui/react";
import { IoLogoDiscord, IoLogoGithub, IoMoon } from "react-icons/io5";

export const HeaderBar = () => {
  return (
    <Box>
      <Stack
        as={Container}
        maxW={"7xl"}
        py={4}
        direction={{ base: "column", sm: "row" }}
        spacing={4}
        justify={"space-between"}
        align={{ base: "start", sm: "center" }}
      >
        <Link href={"/"} passHref>
          <Box as={"a"}>
            <Heading as={"h1"} size={"md"}>
              <Box as={"span"} color={"green.400"}>
                Chakra
              </Box>{" "}
              Templates
            </Heading>
          </Box>
        </Link>
        <Stack direction={"row"} spacing={4} color={"gray.500"}>
          <IconButton
            size={"sm"}
            aria-label={"GitHub"}
            icon={<IoLogoGithub size={18} />}
          />
          <IconButton
            size={"sm"}
            aria-label={"Discord"}
            icon={<IoLogoDiscord size={18} />}
          />
          <IconButton
            size={"sm"}
            aria-label={"Toggle Dark Mode"}
            icon={<IoMoon size={18} />}
          />
        </Stack>
      </Stack>
    </Box>
  );
};
