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
import { data } from '../data';
import {
  ANALYTICS_LINK,
  DISCORD_INVITE_LINK,
  GITHUB_LINK,
  TWITTER_LINK,
  FIGMA_LINK,
} from '../constants';

const SOCIAL_LINKS = [
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
];

export const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.200', 'gray.900')}
      color={useColorModeValue('gray.600', 'gray.500')}
      py={{ base: 4, sm: 8 }}>
      <Container as={Stack} spacing={6} maxW={'7xl'} direction={'column'}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 8, md: 32 }}>
          <Stack spacing={4}>
            <Text fontFamily={'heading'} fontSize={'lg'}>
              Social
            </Text>
            <Stack>
              {SOCIAL_LINKS.map((link) => (
                <Link href={link.href}>{link.label}</Link>
              ))}
            </Stack>
          </Stack>

          <Stack spacing={4}>
            <Text fontFamily={'heading'} fontSize={'lg'}>
              Templates
            </Text>
            <Stack>
              {data.map((category) => (
                <NextLink
                  passHref
                  href={`/${category.id}/${category.children?.[0].id}`}>
                  <Link>{category.name}</Link>
                </NextLink>
              ))}
            </Stack>
          </Stack>

          <Stack spacing={4}>
            <Text fontFamily={'heading'} fontSize={'lg'}>
              Analytics
            </Text>
            <Stack>
              <Link href={ANALYTICS_LINK}>Public Statistics</Link>
              <Link href="https://splitbee.io?ref=chakratemplates">
                <img
                  src={useColorModeValue(
                    'https://splitbee.io/splitbee-badge.svg',
                    'https://splitbee.io/splitbee-badge-dark.svg'
                  )}
                  alt="Splitbee Analytics"
                />
              </Link>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          textAlign={'center'}
          borderTopWidth={1}
          borderTopStyle={'solid'}
          borderTopColor={useColorModeValue('gray.300', 'gray.800')}
          pt={8}>
          <Text>
            <a
              href="https://vercel.com/?utm_source=chakra-templates.dev"
              target={'_blank'}>
              Hosted on <Icon mt={-1} as={IoLogoVercel} /> Vercel
            </a>
          </Text>
          <Text>
            Made on the Internet by{' '}
            <Link href={'https://twitter.com/hauptrolle_'}>Achim Rolle</Link>{' '}
            and{' '}
            <Link href={'https://twitter.com/NikolovLazar'}>Lazar Nikolov</Link>
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
