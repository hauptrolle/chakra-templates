import { Box } from "@chakra-ui/react";

export default function WithAction() {
  return (
    <>
      <Box bg={["red.500", "green.500"]} mb={[24, 12]}>
        with
      </Box>
      <Box bg={["red.500", "green.500"]}>action</Box>
    </>
  );
}
