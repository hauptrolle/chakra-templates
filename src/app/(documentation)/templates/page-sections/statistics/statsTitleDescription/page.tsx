'use client'

import { Container, Grid, GridItem, Flex, Box, Text, Heading } from '@chakra-ui/react'

function statsTitleDescription() {
  return (
    <Container py={5} maxW={'container.lg'}>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        gap={6}>
        <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
          <Heading as={'h2'}>Medium Length Title</Heading>
        </GridItem>
        <GridItem w="100%">
          <Flex flexDirection={'column'}>
            <Text fontSize={'4xl'} fontWeight={'bold'}>
              20%
            </Text>
            <Box fontSize={'sm'}>
              Description for the number. People always pay attention to numbers.
            </Box>
          </Flex>
        </GridItem>
        <GridItem w="100%">
          <Flex flexDirection={'column'}>
            <Text fontSize={'4xl'} fontWeight={'bold'}>
              20%
            </Text>
            <Box fontSize={'sm'}>
              Description for the number. People always pay attention to numbers.
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default statsTitleDescription
