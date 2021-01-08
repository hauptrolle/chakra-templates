import { ReactNode } from 'react';
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
          <Stack as={'nav'} w={'full'} maxW={{ md: '2xs' }} spacing={6}>
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
                    <Link fontWeight={500} color={'gray.700'} fontSize={'sm'}>
                      {subCategory.name}
                    </Link>
                  ))}
                </Stack>
              </Stack>
            ))}
          </Stack>
          <Flex w={'full'} bg={'green.100'}>
            {children}
          </Flex>
        </Stack>
      </Container>
      <Footer />
    </>
  );
};
