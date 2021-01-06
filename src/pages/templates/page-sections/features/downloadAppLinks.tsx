import { Box, Container, Heading, Text, Stack } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import Link from 'next/link';

import PlayStoreBadge from '@/components/PlayStoreBadge';
import AppStoreBadge from '@/components/AppStoreBadge';

export default function DownloadAppLinks() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} alignItems={'center'}>
        <Box
          rounded={'full'}
          background={'blue.500'}
          w={20}
          h={20}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}>
          <DownloadIcon color={'white'} w={10} h={10} />
        </Box>
        <Heading fontSize={'4xl'} align={'center'}>
          Download our app
        </Heading>
        <Text align={'center'} color={'gray.600'} fontSize={'lg'}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </Text>
        <Stack direction={['column', 'row']} pt={6}>
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
    </Box>
  );
}
