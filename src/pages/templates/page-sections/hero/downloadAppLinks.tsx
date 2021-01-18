import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';

import PlayStoreBadge from '@/components/PlayStoreBadge';
import AppStoreBadge from '@/components/AppStoreBadge';

export default function DownloadAppLinks() {
  return (
    <Container
      maxW={'7xl'}
      p={4}
      display={'flex'}
      alignItems={'center'}
      flexDirection={['column', 'column', 'row']}>
      <Stack spacing={4}>
        <Heading textAlign={['center', 'center', 'left']} fontSize={'4xl'}>
          Download our app
        </Heading>
        <Text
          textAlign={['center', 'center', 'left']}
          color={'gray.600'}
          fontSize={'lg'}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </Text>
        <Stack
          justifyContent={['center', 'center', 'left']}
          direction={'row'}
          pt={6}>
          <Link href={'/'} passHref>
            <a target={'_blank'}>
              <AppStoreBadge />
            </a>
          </Link>
          <Link href={'/'} passHref>
            <a target={'_blank'}>
              <PlayStoreBadge />
            </a>
          </Link>
        </Stack>
      </Stack>
      <Box p={[0, 0, 10]} pt={[20, 20, 0]}>
        <Image
          style={{
            transform: useBreakpointValue([
              'rotate(-45deg)',
              'rotate(-45deg)',
              'rotate(0deg)',
            ]),
          }}
          alt={'Device'}
          w={'100%'}
          fit={'contain'}
          src={'/images/device.png'}
        />
      </Box>
    </Container>
  );
}
