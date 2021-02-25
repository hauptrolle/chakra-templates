import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { SiLinkedin, SiMessenger } from 'react-icons/si';
import { Box, Button, Center, Stack, Text } from '@chakra-ui/react';

export default function All() {
  return (
    <Box>
      <Center>
        <Stack spacing={2}>
          {/* Facebook */}
          <Button w={'md'} colorScheme={'facebook'} leftIcon={<FaFacebook />}>
            <Center>
              <Text>Continue with Facebook</Text>
            </Center>
          </Button>

          {/* Google */}
          <Button w={'md'} variant={'outline'} leftIcon={<FcGoogle />}>
            <Center>
              <Text>Sign in with Google</Text>
            </Center>
          </Button>

          {/* LinkedIn */}
          <Button w={'md'} colorScheme={'messenger'} leftIcon={<SiLinkedin />}>
            <Center>
              <Text>Send to Messenger</Text>
            </Center>
          </Button>

          {/* Messenger */}
          <Button w={'md'} colorScheme={'messenger'} leftIcon={<SiMessenger />}>
            <Center>
              <Text>Send to Messenger</Text>
            </Center>
          </Button>
        </Stack>
      </Center>
    </Box>
  );
}
