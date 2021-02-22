import { SiLinkedin } from 'react-icons/si';
import { Button, Center, Text } from '@chakra-ui/react';

export default function LinkedinButton() {
  return (
    <Center>
      <Button w={'md'} colorScheme={'messenger'} leftIcon={<SiLinkedin />}>
        <Center>
          <Text>Send to Messenger</Text>
        </Center>
      </Button>
    </Center>
  );
}
