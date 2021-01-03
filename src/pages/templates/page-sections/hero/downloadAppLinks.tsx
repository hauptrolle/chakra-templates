import { Box, Container, Heading, Text, Stack, Image } from "@chakra-ui/react";
import Link from "next/link";

import PlayStoreBadge from "@/components/PlayStoreBadge";
import AppStoreBadge from "@/components/AppStoreBadge";

export default function DownloadAppLinks() {
  return (
    <Container
      maxW={"7xl"}
      p={4}
      display={"flex"}
      alignItems={"center"}
      flexDirection={"row"}
    >
      <Stack spacing={4}>
        <Heading fontSize={"4xl"}>Download our app</Heading>
        <Text color={"gray.600"} fontSize={"lg"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </Text>
        <Stack direction={["column", "row"]} pt={6}>
          <Link href={"/"} passHref>
            <a target={"_blank"}>
              <AppStoreBadge />
            </a>
          </Link>
          <Link href={"/"} passHref>
            <a target={"_blank"}>
              <PlayStoreBadge />
            </a>
          </Link>
        </Stack>
      </Stack>
      <Box p={10}>
        <Image alt={"Device"} maxW={"xl"} src={"/images/device.png"} />
      </Box>
    </Container>
  );
}
