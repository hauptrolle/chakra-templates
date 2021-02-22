import { Stack } from '@chakra-ui/react';

import GoogleButton from './Google';
import FacebookButton from './Facebook';
import LinkedinButton from './LinkedIn';
import MessengerButton from './Messenger';

export default function All() {
  return (
    <Stack m={4} spacing={2}>
      <MessengerButton />
      <FacebookButton />
      <LinkedinButton />
      <GoogleButton />
    </Stack>
  );
}
