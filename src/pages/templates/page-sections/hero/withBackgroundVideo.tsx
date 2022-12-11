import { Box, Button, Grid, GridItem, Text } from '@chakra-ui/react';
import Head from 'next/head';

export default function withBackgroundVideo() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <video
        playsInline
        autoPlay
        muted
        loop
        style={{
          objectFit: 'cover',
          width: ' 100%',
          height: '100%',
          position: 'fixed',
          top: 0,
          left: 0,
        }}>
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-308-large.mp4"
          type="video/mp4"
        />
      </video>
      <Box
        zIndex="base"
        bgGradient={'linear(to-r, blackAlpha.900, transparent)'}
        color="white"
        fontFamily={'Montserrat'}>
        <Grid
          h="100vh"
          templateColumns={{
            base: 'repeat(4, 1fr)',
            md: 'repeat(6,1fr)',
            lg: 'repeat(12,1fr)',
          }}
          templateRows="repeat(2, 1fr)"
          gap="20px"
          px={{ base: '16px', md: '0px' }}>
          <GridItem
            colSpan={{ base: 4, md: 6 }}
            colStart={{ lg: 2 }}
            rowSpan={1}
            alignSelf="end"
            textAlign={{ base: 'center', lg: 'start' }}>
            <Text
              as="h1"
              fontSize={{ base: '40px', md: '48px', lg: '56px' }}
              fontWeight="800">
              Work without limit
            </Text>
            <Text fontWeight="300" fontSize={{ base: '16px', md: '24px' }}>
              Work remotely around the world without limits
            </Text>
            <Button
              bg="blue.700"
              fontSize="sm"
              fontWeight="400"
              marginTop="16px"
              p="1rem 4rem">
              Let`s go
            </Button>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
