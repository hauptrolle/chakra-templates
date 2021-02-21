import {
  Box,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
  Button,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export default function PricingTable() {
  const borderBg = useColorModeValue('gray.200', 'gray.500');
  const pricingItemStyles = {
    py: 16,
    px: 8,
    mb: 4,
    mt: { base: 12, lg: 24 },
    mx: { base: 'auto', lg: 4 },
    borderColor: borderBg,
    borderRadius: 10,
    borderWidth: '2px',
    maxW: '350px',
  };
  const priceProps = {
    fontSize: '5xl',
    fontWeight: 'bold',
    my: 3,
  };
  const priceTypeProps = {
    fontSize: '2xl',
    fontWeight: 'semibold',
    color: 'gray.500',
  };
  return (
    <Box m="0 auto" bg={useColorModeValue('gray.50', 'gray.800')}>
      <Box textAlign="center" mt="1rem">
        <Heading
          fontSize="3rem"
          fontWeight="700"
          letterSpacing="-0.1rem"
          mb={8}>
          Plans that fit your needs.
        </Heading>
        <Text fontSize="lg">
          Start with 14-day free trial. No credit card needed. Cancel at
          anytime.
        </Text>
      </Box>

      <Flex
        maxW={['100%', '90%']}
        m="0 auto"
        direction={['column', 'column', 'row']}
        textAlign="center">
        <VStack flex="1" mx={['0.3rem', '1rem']}>
          <VStack
            {...pricingItemStyles}
            bg={useColorModeValue('white', 'gray.800')}>
            <Badge fontSize="sm">Lite</Badge>
            <Text {...priceProps}>
              79
              <Text as="span" {...priceTypeProps}>
                $/month
              </Text>
            </Text>
            <Text minH={24}>
              Best for small scale projects. Only crucial features included.
            </Text>
            <Box>
              <Button colorScheme="green" variant="outline">
                Start Trial
              </Button>
            </Box>
          </VStack>
          <VStack>
            <List spacing={3} textAlign="start">
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                100 build minutes
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />1 concurrent
                builds
              </ListItem>
              <ListItem>
                <ListIcon as={FaTimesCircle} color="red.500" />
                150GB Transfer
              </ListItem>
              <ListItem>
                <ListIcon as={FaTimesCircle} color="red.500" />
                Email support
              </ListItem>
              <ListItem>
                <ListIcon as={FaTimesCircle} color="red.500" />
                Phone support
              </ListItem>
            </List>
          </VStack>
        </VStack>

        <VStack flex="1" w={['95%', '100%']} m="0 auto">
          <VStack
            {...pricingItemStyles}
            bg="green.900"
            color="white"
            shadow="lg">
            <Badge fontSize="md">Ultra</Badge>
            <Text {...priceProps}>
              149
              <Text as="span" {...priceTypeProps}>
                $/month
              </Text>
            </Text>
            <Text minH={24}>
              Best for high traffic websites. Comes with email support.
            </Text>
            <Box>
              <Button size="lg" colorScheme="green" variant="solid">
                Start Trial
              </Button>
            </Box>
          </VStack>
          <VStack>
            <List spacing={3} textAlign="start">
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Lorem ipsum dolor sit.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Lorem, ipsum dolor.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Lorem, ipsum dolor.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Email support
              </ListItem>
              <ListItem>
                <ListIcon color="red.500" as={FaTimesCircle} />
                Phone support
              </ListItem>
            </List>
          </VStack>
        </VStack>

        <VStack flex="1" mx={['0.3rem', '1rem']}>
          <VStack
            {...pricingItemStyles}
            bg={useColorModeValue('white', 'gray.800')}>
            <Badge>Ultra Max</Badge>
            <Text {...priceProps}>
              349
              <Text as="span" {...priceTypeProps}>
                $/month
              </Text>
            </Text>
            <Text minH={24}>
              Highly scalable plan. Best suitable for enterprise applications.
            </Text>
            <Box>
              <Button colorScheme="green" variant="outline">
                Start Trial
              </Button>
            </Box>
          </VStack>
          <VStack>
            <List spacing={3} textAlign="start">
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                unlimited build minutes
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Lorem, ipsum dolor.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                5TB Lorem, ipsum dolor.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Email support
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Phone support
              </ListItem>
            </List>
          </VStack>
        </VStack>
      </Flex>
    </Box>
  );
}
