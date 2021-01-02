import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import Link from "next/link";

import PlayStoreBadge from "@/components/PlayStoreBadge";
import AppStoreBadge from "@/components/AppStoreBadge";

export default function DownloadAppLinks() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} alignItems={"center"}>
        <Box
          rounded={"full"}
          background={"blue.500"}
          w={20}
          h={20}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <DownloadIcon color={"white"} w={10} h={10} />
        </Box>
        <Heading fontSize={"4xl"}>Download our app</Heading>
        <Text align={"center"} color={"gray.600"} fontSize={"lg"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </Text>
        <HStack pt={6}>
          <Link href={"#"} passHref>
            <a target={"_blank"}>
              <AppStoreBadge />
            </a>
          </Link>
          <Link href={"#"} passHref>
            <a target={"_blank"}>
              <PlayStoreBadge />
            </a>
          </Link>
        </HStack>
      </Stack>

      {/* <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container> */}
    </Box>
  );
}
