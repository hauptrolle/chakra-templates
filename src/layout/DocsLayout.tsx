import { ReactNode } from 'react';
import NextLink from 'next/link';
import { Container, Flex, Link, Stack, Text } from '@chakra-ui/react';

import { HeaderBar } from '@/components/HeaderBar';
import { Footer } from '@/components/Footer';
import { data } from '../data';

interface DocsLayoutProps {
  children: ReactNode;
}

export const DocsLayout = ({ children }: DocsLayoutProps) => {
  return (
    <>
      <HeaderBar showBorder={true} />
      <Container maxW={'7xl'} flex={'1 0 auto'} py={8}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 4, md: 8 }}>
          <Stack
            as={'nav'}
            spacing={6}
            maxW={{ md: '3xs' }}
            w={'full'}
            flexShrink={0}>
            {data.map((category) => (
              <Stack>
                <Text
                  fontFamily={'heading'}
                  textTransform={'uppercase'}
                  color={'gray.400'}
                  fontWeight={700}
                  fontSize={'sm'}
                  letterSpacing={1.1}>
                  {category.name}
                </Text>
                <Stack>
                  {category.children?.map((subCategory) => (
                    <NextLink
                      href={`${category.id}/${subCategory.id}`}
                      passHref>
                      <Link fontWeight={500} color={'gray.700'} fontSize={'sm'}>
                        {subCategory.name}
                      </Link>
                    </NextLink>
                  ))}
                </Stack>
              </Stack>
            ))}
          </Stack>
          <Flex w={'full'} direction={'column'}>
            {children}
          </Flex>
        </Stack>
      </Container>
      <Footer />
    </>
  );
};
