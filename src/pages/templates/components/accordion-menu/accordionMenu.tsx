import {
  Accordion,
  AccordionButton,
  AccordionItem,
  Flex,
  AccordionIcon,
  AccordionPanel,
  Icon,
  Text,
} from '@chakra-ui/react';
import { AiOutlineFolder, AiOutlineFile } from 'react-icons/ai';
export default function accordionMenu() {
  return (
    <Accordion
      allowMultiple
      width={{ base: '100%', md: '60%', lg: '50%' }}
      mx={'auto'}
      my={'1rem'}>
      <AccordionItem>
        <AccordionButton as={'div'} _hover={{ backgroundColor: 'cyan.100' }}>
          <AccordionIcon />
          <Flex flex="1" marginRight={'auto'} alignItems={'center'}>
            <Icon as={AiOutlineFolder} marginRight={'1.5'} />
            <Text>Group 1</Text>
          </Flex>
        </AccordionButton>
        <AccordionPanel>
          <Accordion allowMultiple>
            <AccordionItem border={'none'}>
              <AccordionButton
                as={'div'}
                _hover={{ backgroundColor: 'cyan.100' }}>
                <AccordionIcon />
                <Flex flex="1" marginRight={'auto'} alignItems={'center'}>
                  <Icon as={AiOutlineFolder} marginRight={'1.5'} />
                  <Text>Subgroup 1</Text>
                </Flex>
              </AccordionButton>
              <AccordionPanel>
                <Flex
                  marginRight={'auto'}
                  alignItems={'center'}
                  cursor={'pointer'}
                  _hover={{ backgroundColor: 'cyan.100' }}
                  px={'2'}>
                  <Icon as={AiOutlineFile} marginRight={'1.5'} />
                  <Text>Item 1</Text>
                </Flex>
                <Flex
                  marginRight={'auto'}
                  alignItems={'center'}
                  mt={'0.5'}
                  cursor={'pointer'}
                  _hover={{ backgroundColor: 'cyan.100' }}
                  px={'2'}>
                  <Icon as={AiOutlineFile} marginRight={'1.5'} />
                  <Text>Item 2</Text>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Flex
            marginRight={'auto'}
            alignItems={'center'}
            mt={'0.5'}
            cursor={'pointer'}
            px={'2'}
            _hover={{ backgroundColor: 'cyan.100' }}>
            <Icon as={AiOutlineFile} marginRight={'1.5'} />
            <Text>Item 3</Text>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton as={'div'} _hover={{ backgroundColor: 'cyan.100' }}>
          <AccordionIcon />
          <Flex flex="1" marginRight={'auto'} alignItems={'center'}>
            <Icon as={AiOutlineFolder} marginRight={'1.5'} />
            <Text>Group 2</Text>
          </Flex>
        </AccordionButton>
        <AccordionPanel>
          <Accordion allowMultiple>
            <AccordionItem>
              <AccordionButton
                as={'div'}
                _hover={{ backgroundColor: 'cyan.100' }}>
                <AccordionIcon />
                <Flex flex="1" marginRight={'auto'} alignItems={'center'}>
                  <Icon as={AiOutlineFolder} marginRight={'1.5'} />
                  <Text>Subgroup 2</Text>
                </Flex>
              </AccordionButton>
              <AccordionPanel>
                <Flex
                  marginRight={'auto'}
                  alignItems={'center'}
                  cursor={'pointer'}
                  px={'2'}
                  _hover={{ backgroundColor: 'cyan.100' }}>
                  <Icon as={AiOutlineFile} marginRight={'1.5'} />
                  <Text>Item 3</Text>
                </Flex>
                <Flex
                  marginRight={'auto'}
                  alignItems={'center'}
                  mt={'0.5'}
                  cursor={'pointer'}
                  px={'2'}
                  _hover={{ backgroundColor: 'cyan.100' }}>
                  <Icon as={AiOutlineFile} marginRight={'1.5'} />
                  <Text>Item 4</Text>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
