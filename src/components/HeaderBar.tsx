import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Heading,
  IconButton,
  Stack,
  Icon,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  IoLogoDiscord,
  IoLogoGithub,
  IoMoon,
  IoSunny,
  IoMenu,
} from 'react-icons/io5';
import { useViewportScroll } from 'framer-motion';

import { DISCORD_INVITE_LINK, GITHUB_LINK } from '../constants';
import { TextUnderline } from '@/components/TextUnderline';
import { Logo } from '@/components/Logo';

interface HeaderBarProps {
  showBorder?: boolean;
  showNavButton?: boolean;
  onMenuButtonClick?: () => void;
}

export const HeaderBar = ({
  showBorder = false,
  showNavButton = false,
  onMenuButtonClick,
}: HeaderBarProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { scrollY } = useViewportScroll();
  const [y, setY] = useState(0);
  const ref = useRef<HTMLHeadingElement>(null);
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {};

  useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  const borderColor = useColorModeValue('gray.100', 'gray.900');

  return (
    <Box
      as={'header'}
      ref={ref}
      shadow={y > height ? 'lg' : undefined}
      transition="box-shadow 0.2s"
      pos="fixed"
      top="0"
      zIndex="999"
      left="0"
      right="0"
      width="full"
      bg={useColorModeValue('white', 'gray.800')}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={showBorder && y < height ? borderColor : 'transparent'}>
      <Stack
        as={Container}
        maxW={'7xl'}
        py={4}
        direction={'row'}
        spacing={4}
        justify={'space-between'}
        align={'center'}>
        <Link href={'/'} passHref>
          <Stack
            as={'a'}
            direction={'row'}
            alignItems={'center'}
            spacing={{ base: 2, sm: 4 }}>
            <Icon as={Logo} w={{ base: 5, sm: 8 }} h={{ base: 5, sm: 8 }} />
            <Heading as={'h1'} fontSize={{ base: 'sm', md: 'xl' }}>
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
            aria-label={'Toggle Color Mode'}
            onClick={toggleColorMode}
            icon={
              colorMode == 'light' ? (
                <IoMoon size={18} />
              ) : (
                <IoSunny size={18} />
              )
            }
          />
          {showNavButton && (
            <IconButton
              display={{ base: 'inline-flex', lg: 'none' }}
              size={'sm'}
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
              onClick={onMenuButtonClick}
              icon={<IoMenu size={18} />}
            />
          )}
        </Stack>
      </Stack>
    </Box>
  );
};
