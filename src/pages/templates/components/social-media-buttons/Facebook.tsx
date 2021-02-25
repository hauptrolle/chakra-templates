import { FaFacebook } from 'react-icons/fa';
import { Button, Center, Text } from '@chakra-ui/react';

export default function FacebookButton() {
  return (
    <Center pt={20} px={5}>
      <Button w={'md'} colorScheme={'facebook'} leftIcon={<FaFacebook />}>
        <Center>
          <Text>Continue with Facebook</Text>
        </Center>
      </Button>
    </Center>
  );
}
