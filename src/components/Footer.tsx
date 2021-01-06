import { Container, Icon, Box, Stack, Text, Link } from "@chakra-ui/react";
import { IoLogoVercel } from "react-icons/io5";
import NextLink from "next/link";

const NAVIGATION_ITEMS = [
  {
    label: "Templates",
    href: "/templates",
    internal: true,
  },
  {
    label: "Discord",
    href: "https://discord.gg/CfUTeTw89G",
  },
  {
    label: "GitHub",
    href: "https://github.com/hauptrolle/chakra-templates",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/ChakraTemplates",
  },
  {
    label: "Figma",
    href: "#", // TODO add link to figma file
  },
  {
    label: "Analytics",
    href: "https://app.splitbee.io/public/chakra-templates.dev",
  },
];

export const Footer = () => {
  return (
    <Box bg={"gray.50"} color={"gray.500"} py={{ base: 4, sm: 8 }}>
      <Container as={Stack} spacing={6} maxW={"7xl"}>
        <Stack
          direction={{ base: "column", sm: "row" }}
          justify={"space-between"}
          as={"nav"}
          spacing={3}
        >
          {NAVIGATION_ITEMS.map((navItem) => (
            <NextLink href={navItem.href} passHref>
              <Link>{navItem.label}</Link>
            </NextLink>
          ))}
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          justify={"space-between"}
        >
          <Text>
            Hosted on <Icon mt={-1} as={IoLogoVercel} />
            Vercel
          </Text>
          <Text>
            Made on the Internet by{" "}
            <Link href={"https://www.hauptrolle.me"}>Achim Rolle</Link> and{" "}
            <Link href={"https://nikolovlazar.com"}>Lazar Nikolov</Link>
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
