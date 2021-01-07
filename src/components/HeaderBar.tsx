import Link from 'next/link';
import {
  Box,
  Container,
  Heading,
  IconButton,
  Stack,
  Icon,
} from '@chakra-ui/react';
import { IoLogoDiscord, IoLogoGithub, IoMoon } from 'react-icons/io5';

import { DISCORD_INVITE_LINK, GITHUB_LINK } from '../constants';
import { TextUnderline } from '@/components/TextUnderline';
import { Logo } from '@/components/Logo';

export const HeaderBar = () => {
  return (
    <Box>
      <Stack
        as={Container}
        maxW={'7xl'}
        py={4}
        direction={'row'}
        spacing={4}
        justify={'space-between'}
        align={'center'}>
        <Link href={'/'} passHref>
          <Stack as={'a'} direction={'row'} alignItems={'center'} spacing={4}>
            <Icon as={Logo} w={8} h={8} />
            <Heading as={'h1'} size={'md'}>
              <TextUnderline>Chakra</TextUnderline> Templates
            </Heading>
          </Stack>
        </Link>
        <Stack
          direction={'row'}
          spacing={{ base: 2, sm: 4 }}
          color={'gray.500'}>
          <IconButton
            size={'sm'}
            as={'a'}
            href={GITHUB_LINK}
            target={'_blank'}
            variant={'ghost'}
            aria-label={'GitHub'}
            icon={<IoLogoGithub size={18} />}
          />
          <IconButton
            size={'sm'}
            as={'a'}
            href={DISCORD_INVITE_LINK}
            target={'_blank'}
            variant={'ghost'}
            aria-label={'Discord'}
            icon={<IoLogoDiscord size={18} />}
          />
          <IconButton
            size={'sm'}
            variant={'ghost'}
            aria-label={'Toggle Dark Mode'}
            icon={<IoMoon size={18} />}
          />
        </Stack>
      </Stack>
    </Box>
  );
};
