'use client'

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
  IconButton,
} from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

import { Header } from '#/components/Header'
import { Footer } from '#/components/Footer'
import { Navigation } from '#/components/Navigation'
import { Logo } from '#/components/Logo'

interface Props {
  children: React.ReactNode
}

const DocumentationLayout = (props: Props) => {
  const { children } = props
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Header />
      <Container maxW={'7xl'} flex={'1 0 auto'} py={8} mt={20}>
        <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: 0, lg: 8 }}>
          <Navigation display={{ base: 'none', lg: 'block' }} />
          <Flex direction={'column'} w={'full'} maxW={{ lg: 'calc(100% - 16rem)' }}>
            {children}
          </Flex>
        </Stack>
      </Container>
      <Footer />

      <IconButton
        display={{ base: 'block', lg: 'none' }}
        position={'fixed'}
        bottom={4}
        right={6}
        size={'md'}
        isRound={true}
        onClick={onOpen}
        aria-label={'Toggle Docs Menu'}
        bg={'white'}
        css={{
          boxShadow:
            '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)',
        }}
        icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
      />

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
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
  )
}

export default DocumentationLayout
