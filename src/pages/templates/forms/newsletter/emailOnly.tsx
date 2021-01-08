import { FormEvent, ChangeEvent, useState } from "react";
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Flex,
  Text,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export default function EmailOnly() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"initial" | "submitting" | "success">(
    "initial"
  );
  const [error, setError] = useState(false);

  return (
    <Flex w="100%" my={6} mx={2}>
      <Flex
        w={["100%", "95%", "80%", "70%"]}
        bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
        m="auto"
        borderRadius="lg"
        p={6}
        direction="column"
      >
        <Text as="h2" fontSize={["xl", "2xl"]} textAlign="center" mb={5}>
          Subscribe to our Newsletter.
        </Text>
        <Stack
          direction={["column", "column", "row"]}
          as="form"
          spacing="12px"
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            setError(false);
            setState("submitting");

            // remove this code and implement your submit logic right here
            setTimeout(() => {
              if (email === "fail@example.com") {
                setError(true);
                setState("initial");
                return;
              }

              setState("success");
            }, 1000);
          }}
        >
          <FormControl>
            <Input
              variant="solid"
              borderWidth="1px"
              color="gray.800"
              _placeholder={{
                color: "gray.400",
              }}
              borderColor={useColorModeValue("gray.300", "gray.700")}
              id="email"
              type="email"
              required
              placeholder="Your Email"
              aria-label="Your Email"
              value={email}
              disabled={state !== "initial"}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </FormControl>
          <FormControl w={["100%", "100%", "40%"]}>
            <Button
              colorScheme={state === "success" ? "green" : "blue"}
              isLoading={state === "submitting"}
              w="100%"
              type={state === "success" ? "button" : "submit"}
            >
              {state === "success" ? <CheckIcon /> : "Submit"}
            </Button>
          </FormControl>
        </Stack>
        <Text mt={2} textAlign="center" color={error ? "red.500" : "gray.500"}>
          {error
            ? "Oh no an error occured! 😢 Please try again later."
            : "You won't receive any spam."}
        </Text>
      </Flex>
    </Flex>
  );
}
