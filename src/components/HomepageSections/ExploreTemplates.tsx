import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { IoArrowForward } from 'react-icons/io5';

import { TEMPLATES_LINK } from '../../constants';

type ExploreTemplatesProps = {
  templatesCount: number;
};

export const ExploreTemplates = ({ templatesCount }: ExploreTemplatesProps) => {
  return (
    <Box bg={useColorModeValue('green.50', 'gray.800')}>
      <Container maxW={'7xl'} py={{ base: 14, sm: 20, md: 32 }}>
        <Box
          bg={useColorModeValue('green.400', 'green.500')}
          rounded={'xl'}
          color={useColorModeValue('white', 'gray.100')}
          p={10}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box>
              <Heading as={'h3'} mb={2}>
                Explore {templatesCount - 1}+ production-ready Templates
              </Heading>
              <Text fontSize={'lg'}>
                and start building beautiful websites & webapps today!
              </Text>
            </Box>
            <Flex w={'full'} align={'center'} justify={'center'}>
              <NextLink href={TEMPLATES_LINK} passHref>
                <Button
                  as={'a'}
                  bg={'green.600'}
                  color={'white'}
                  px={8}
                  py={7}
                  fontSize={'lg'}
                  rounded={'full'}
                  rightIcon={<IoArrowForward />}
                  _hover={{
                    bg: 'green.700',
                    boxShadow: 'xl',
                  }}>
                  Browse Templates
                </Button>
              </NextLink>
            </Flex>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};
