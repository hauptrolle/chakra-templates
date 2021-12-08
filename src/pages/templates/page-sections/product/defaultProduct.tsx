import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Grid,
  GridItem,
  Image,
  Flex,
  Heading,
  SimpleGrid,
  StackDivider,ListIcon,
  useColorModeValue,
  VisuallyHidden,List,ListItem
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function defaultProduct() {
  return (
    // <Box
    //   bg={useColorModeValue('gray.50', 'gray.900')}
    //   color={useColorModeValue('gray.700', 'gray.200')}>
    //   <Container
    //     as={Stack}
    //     maxW={'6xl'}
    //     py={4}
    //     direction={{ base: 'column', md: 'row' }}
    //     spacing={4}
    //     justify={{ base: 'center', md: 'space-between' }}
    //     align={{ base: 'center', md: 'center' }}>
    //     <Text>© 2020 Chakra Templates. All rights reserved</Text>
    //     <Stack direction={'row'} spacing={6}>
    //       <SocialButton label={'Twitter'} href={'#'}>
    //         <FaTwitter />
    //       </SocialButton>
    //       <SocialButton label={'YouTube'} href={'#'}>
    //         <FaYoutube />
    //       </SocialButton>
    //       <SocialButton label={'Instagram'} href={'#'}>
    //         <FaInstagram />
    //       </SocialButton>
    //     </Stack>
    //   </Container>
    // </Box>
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
            }
            objectFit={'cover'}
          />
        </Flex>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Our Story
          </Text>
          <Heading>18oz Stainless Steel Paradise Bottle</Heading>
          <Text color={'gray.900'}  fontWeight={300} fontSize={'2xl'}> $29.99 USD</Text>


          <Text color={'gray.500'} fontSize={'lg'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <Box>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet at delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis porro, quae, quisquam quos reprehenderit velit? Natus, totam.</Box>
            <Box>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet at delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis porro, quae, quisquam quos reprehenderit velit? Natus, totam.</Box>


          </Stack>

          <Heading>Product Details</Heading>
          <List spacing={3}>
            <ListItem>

              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>
            <ListItem>
              <ListIcon  color='green.500' />
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
            </ListItem>
            <ListItem>
              <ListIcon  color='green.500' />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem>
              <ListIcon  color='green.500' />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
          </List>

        </Stack>
      </SimpleGrid>
    </Container>
  );
}
