import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Container,
  Flex,
  Stack,
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from '@chakra-ui/react';

import { HeaderBar } from '@/components/HeaderBar';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';
import { Logo } from '@/components/Logo';

interface DocsLayoutProps {
  children: ReactNode;
}

export const DocsLayout = ({ children }: DocsLayoutProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', onClose);

    return () => {
      router.events.off('routeChangeComplete', onClose);
    };
  });

  return (
    <>
      <HeaderBar
        showBorder={true}
        showNavButton={true}
        onMenuButtonClick={onOpen}
      />
      <Container maxW={'7xl'} flex={'1 0 auto'} py={8}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: 0, lg: 8 }}>
          <Navigation display={{ base: 'none', lg: 'block' }} />
          <Flex
            direction={'column'}
            w={'full'}
            maxW={{ lg: 'calc(100% - 16rem)' }}>
            {children}
          </Flex>
        </Stack>
      </Container>
      <Footer />

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Icon as={Logo} w={10} h={10} />
            </DrawerHeader>
            <DrawerBody>
              <Navigation />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
