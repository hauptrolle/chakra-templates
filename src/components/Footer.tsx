import {
  Container,
  Icon,
  Box,
  Stack,
  Text,
  Link,
  SimpleGrid,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import NextImage from 'next/image';
import { data } from '../data';
import {
  ANALYTICS_LINK,
  DISCORD_INVITE_LINK,
  GITHUB_LINK,
  TWITTER_LINK,
  FIGMA_LINK,
  CONTRIBUTORS_LINK,
  TWITTER_LINK_ACHIM,
  BUY_ME_A_COFFEE_LINK,
} from '../constants';
import { Logo } from '@/components/Logo';
import { ReactNode } from 'react';

const SOCIAL_LINKS = [
  {
    label: 'Discord Community',
    href: DISCORD_INVITE_LINK,
  },
  {
    label: 'GitHub Repository',
    href: GITHUB_LINK,
  },
  {
    label: 'Twitter Account',
    href: TWITTER_LINK,
  },
  {
    label: 'Figma Design Resources',
    href: FIGMA_LINK,
  },
];

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Templates</ListHeader>
            {Object.keys(data).map((category) => (
              <NextLink
                key={category}
                passHref
                href={`/${category}/${
                  Object.keys(data[category].children)[0]
                }`}>
                <Link>{data[category].name}</Link>
              </NextLink>
            ))}
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Social</ListHeader>
            {SOCIAL_LINKS.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Analytics</ListHeader>
            <Link href={ANALYTICS_LINK}>Public Statistics</Link>
            <Link href="https://splitbee.io?ref=chakratemplates">
              <NextImage
                src={useColorModeValue(
                  'https://splitbee.io/splitbee-badge.svg',
                  'https://splitbee.io/splitbee-badge-dark.svg'
                )}
                width={114}
                height={45}
                alt="Splitbee Analytics"
              />
            </Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Support us</ListHeader>
            <Link href={BUY_ME_A_COFFEE_LINK}>
              <NextImage
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                alt="Buy Me A Coffee"
                height={40}
                width={142.47}
              />
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box pb={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}>
          <NextLink href={'/'} passHref>
            <Link>
              <Icon as={Logo} w={{ base: 12 }} h={{ base: 12 }} />
            </Link>
          </NextLink>
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          Made on the Internet by{' '}
          <Link href={TWITTER_LINK_ACHIM}>Achim Rolle</Link> and{' '}
          <Link href={CONTRIBUTORS_LINK}>Contributors</Link>
        </Text>
      </Box>
    </Box>
  );
};
