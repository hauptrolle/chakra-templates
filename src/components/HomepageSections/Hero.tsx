import {
  Container,
  Stack,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoArrowForward } from 'react-icons/io5';
import NextLink from 'next/link';

import { TextUnderline } from '@/components/TextUnderline';
import { HeroComponents } from '@/components/HomepageSections/HeroComponents';
import {
  SPLITBEE_HERO_SUGGEST_TEMPLATE,
  SUGGEST_TEMPLATE_LINK,
  TEMPLATES_LINK,
} from '../../constants';

export const Hero = () => {
  return (
    <Stack
      as={Container}
      maxW={'7xl'}
      h={{ base: '100%', lg: '90vh' }}
      py={{ base: 14, sm: 20, md: 32 }}
      mt={{ base: 10, sm: 0 }}
      spacing={{ base: 10, lg: 24 }}
      direction={{ base: 'column', lg: 'row' }}
      alignItems={'center'}>
      <Stack spacing={9} mb={{ base: 12, lg: 0 }} flex={2}>
        <Heading as={'h2'} fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}>
          <TextUnderline>Production-ready</TextUnderline> Chakra UI Templates
          for developers
        </Heading>
        <Text color={'gray.500'} fontSize={{ md: 'lg' }}>
          A growing collection of hand-crafted Chakra UI templates ready to drop
          into your React project.
        </Text>
        <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
          <NextLink href={TEMPLATES_LINK} passHref>
            <Button
              as={'a'}
              colorScheme={'green'}
              background={'green.400'}
              _hover={{ bg: 'green.500' }}
              color={'white'}
              variant={'solid'}
              size={'lg'}
              rounded={'full'}
              rightIcon={<IoArrowForward />}>
              Browse Templates
            </Button>
          </NextLink>
          <Button
            data-splitbee-event={SPLITBEE_HERO_SUGGEST_TEMPLATE}
            as={'a'}
            href={SUGGEST_TEMPLATE_LINK}
            colorScheme={'green'}
            variant={'ghost'}
            size={'lg'}
            rounded={'full'}
            color={useColorModeValue('green.400', 'white')}
            _hover={{ bg: useColorModeValue('green.100', 'green.800') }}>
            Suggest Templates
          </Button>
        </Stack>
      </Stack>

      <HeroComponents />
    </Stack>
  );
};
