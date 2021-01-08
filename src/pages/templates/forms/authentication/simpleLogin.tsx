import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
} from "@chakra-ui/react";

export default function SimpleLogin() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      align={"center"}
      justify={"center"}
      bg={"gray.100"}
    >
      <Stack spacing={8} mx={"auto"}>
        <Heading fontSize={"3xl"} textAlign={"center"}>
          Sign in to your account
        </Heading>
        <Box
          rounded={"lg"}
          bg={"white"}
          boxShadow={"lg"}
          p={{ base: 4, md: 8 }}
          minW={{ md: "md" }}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.500"}>Forgot password?</Link>
              </Stack>
              <Button colorScheme={"blue"} variant={"solid"}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
