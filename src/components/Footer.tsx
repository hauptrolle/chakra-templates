import {
  Container,
  Icon,
  Box,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoLogoVercel } from 'react-icons/io5';
import NextLink from 'next/link';
import {
  ANALYTICS_LINK,
  DISCORD_INVITE_LINK,
  GITHUB_LINK,
  TEMPLATES_LINK,
  TWITTER_LINK,
  FIGMA_LINK,
} from '../constants';

const NAVIGATION_ITEMS = [
  {
    label: 'Templates',
    href: TEMPLATES_LINK,
    internal: true,
  },
  {
    label: 'Discord',
    href: DISCORD_INVITE_LINK,
  },
  {
    label: 'GitHub',
    href: GITHUB_LINK,
  },
  {
    label: 'Twitter',
    href: TWITTER_LINK,
  },
  {
    label: 'Figma',
    href: FIGMA_LINK,
  },
  {
    label: 'Analytics',
    href: ANALYTICS_LINK,
  },
];

export const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={'gray.500'}
      py={{ base: 4, sm: 8 }}>
      <Container as={Stack} spacing={6} maxW={'7xl'}>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          justify={'space-between'}
          as={'nav'}
          spacing={3}>
          {NAVIGATION_ITEMS.map((navItem) => (
            <NextLink key={navItem.href} href={navItem.href} passHref>
              <Link target={navItem.internal ? undefined : '_blank'}>
                {navItem.label}
              </Link>
            </NextLink>
          ))}
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          justify={'space-between'}>
          <Text>
            <a
              href="https://vercel.com/?utm_source=chakra-templates.dev"
              target={'_blank'}>
              Hosted on <Icon mt={-1} as={IoLogoVercel} /> Vercel
            </a>
          </Text>
          <Text>
            Made on the Internet by{' '}
            <Link href={'https://www.hauptrolle.me'}>Achim Rolle</Link> and{' '}
            <Link href={'https://twitter.com/NikolovLazar'}>Lazar Nikolov</Link>
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
