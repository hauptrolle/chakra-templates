import { SiMessenger } from 'react-icons/si';
import { Button, Center, Text } from '@chakra-ui/react';

export default function MessengerButton() {
  return (
    <Center>
      <Button w={'md'} colorScheme={'messenger'} leftIcon={<SiMessenger />}>
        <Center>
          <Text>Send to Messenger</Text>
        </Center>
      </Button>
    </Center>
  );
}
