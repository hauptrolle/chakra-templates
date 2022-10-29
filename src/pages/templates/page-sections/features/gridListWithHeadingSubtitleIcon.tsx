import React from 'react';
import { Badge, Flex, Text, Grid, Heading } from '@chakra-ui/react';
import { StarIcon, AddIcon, LockIcon } from '@chakra-ui/icons';

export default function gridListWithHeadingSubtitleIcon() {
  return (
    <div>
      <Flex bg="#87CEEB" flexDir={'column'}>
        <Badge bg="blue" color="white" mx="auto" mt="1%" letterSpacing="1.1px">
          Features
        </Badge>
        <Text
          fontSize="4xl"
          fontWeight={'bold'}
          mx="auto"
          mt="1%"
          letterSpacing="1.1px">
          Outstanding Features
        </Text>

        <Grid templateColumns="repeat(3, 1fr)" gap={6} m="3%">
          <Flex
            bg="white"
            p={6}
            flexDir="row"
            justifyContent={'space-around'}
            alignContent="center">
            <Flex flexDir="column" w="50%">
              <Heading letterSpacing={'1.1px'}> Quality</Heading>
              <Text my="5%" textColor={'gray.400'}>
                You can pay something very quickly
              </Text>
            </Flex>
            <Flex my="auto">
              <AddIcon w={10} h={10} />
            </Flex>
          </Flex>

          <Flex
            bg="white"
            p={6}
            flexDir="row"
            justifyContent={'space-around'}
            alignContent="center">
            <Flex flexDir="column" w="50%">
              <Heading letterSpacing={'1.1px'}> Flexible</Heading>
              <Text my="5%" textColor={'gray.400'}>
                You can pay something very quickly
              </Text>
            </Flex>
            <Flex my="auto">
              <LockIcon w={10} h={10} />
            </Flex>
          </Flex>

          <Flex
            bg="white"
            p={6}
            flexDir="row"
            justifyContent={'space-around'}
            alignContent="center">
            <Flex flexDir="column" w="50%">
              <Heading letterSpacing={'1.1px'}> Long Last</Heading>
              <Text my="5%" textColor={'gray.400'}>
                You can pay something very quickly
              </Text>
            </Flex>
            <Flex my="auto">
              <StarIcon w={10} h={10} />
            </Flex>
          </Flex>
        </Grid>
      </Flex>
    </div>
  );
}
