import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{ textDecoration: "none", bg: "gray.300" }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Simple() {
  return (
    <Flex
      bg={"gray.200"}
      p={4}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <IconButton
        size={"sm"}
        icon={<HamburgerIcon />}
        aria-label={"Open Menu"}
        display={{ md: "none" }}
      />

      <HStack spacing={8} alignItems={"center"}>
        <Box>Logo</Box>
        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
          {Links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </HStack>
      </HStack>
      <Flex alignItems={"center"}>
        <Menu>
          <MenuButton
            as={Button}
            rounded={"full"}
            variant={"link"}
            cursor={"pointer"}
          >
            <Avatar
              size={"sm"}
              src={
                "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
              }
            />
          </MenuButton>
          <MenuList>
            <MenuItem>Link 1</MenuItem>
            <MenuItem>Link 2</MenuItem>
            <MenuDivider />
            <MenuItem>Link 3</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}
