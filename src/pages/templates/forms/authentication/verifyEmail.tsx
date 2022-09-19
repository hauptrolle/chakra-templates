import { Center, Heading } from '@chakra-ui/react';
import {
  Button,
  FormControl,
  Flex,
  Input,
  Stack,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';

export default function VerifyEmailForm(): JSX.Element {
  const handleFocus = (e: any) => {
    if (e.target.value.length >= 1 && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'sm'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={10}>
        <Center>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Verify your Email
          </Heading>
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          color={useColorModeValue('gray.800', 'gray.400')}>
          We have sent code to your email
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          fontWeight="bold"
          color={useColorModeValue('gray.800', 'gray.400')}>
          username@mail.com
        </Center>
        <FormControl>
          <Center>
            <HStack onChange={handleFocus} autoFocus={true} spacing={4}>
              <Input maxLength={1} height="10" width="12" />
              <Input maxLength={1} height="10" width="12" />
              <Input maxLength={1} height="10" width="12" />
              <Input maxLength={1} height="10" width="12" />
            </HStack>
          </Center>
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>
            Verify
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
