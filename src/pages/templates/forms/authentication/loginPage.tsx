import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  SimpleGrid,
  Image,
  Center,
} from '@chakra-ui/react';

export default function LoginPage() {
  return (
    <SimpleGrid columns={[1, 2]} bg="gray.50" minH={['100vh']}>
      <Center bgGradient="linear(135deg, rgba(190,184,224,1) 0%, rgba(245,219,255,1) 15%, rgba(207,211,255,1) 50%, rgba(255,219,246,1) 100%)">
        <Stack
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          mx={'auto'}
          maxW={'lg'}
          p={6}
          spacing={8}>
          <Stack align={'center'}>
            <Image
              src="https://spa-company.com/wp-content/uploads/2020/03/dummy-logo-08.png"
              alt="logo"
              h={['100px', '80px']}
            />
            <Heading fontSize={'4xl'}>Let's get Started</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link>{' '}
              ✌️
            </Text>
          </Stack>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={10}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.600'}>Forgot password?</Link>
            </Stack>
            <Button
              bg={'blue.600'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Center>
      <Box
        bg={useColorModeValue(
          'url("https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6")',
          'gray.700'
        )}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        pos={'relative'}
        p={8}
        display={['none', 'block']}>
        <Box
          borderRadius={'lg'}
          p={4}
          color="white"
          pos={'absolute'}
          h={200}
          bottom={10}
          left={10}
          right={10}
          bg={useColorModeValue('rgba(255,255,255,0.2)', 'rgba(0,0,0,0.2)')}
          backdropFilter="blur(20px)"
          fontSize={'2xl'}
          fontWeight={'medium'}
          borderWidth={1}
          borderColor={'whiteAlpha.500'}
          borderStyle="solid"
          shadow={'lg'}>
          "with unititled, your support process can be as enjoyable as your
          product. When it's this easy, we're finding customers come back again
          and again."
        </Box>
      </Box>
    </SimpleGrid>
  );
}
