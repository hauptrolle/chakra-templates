import {
  Box,
  Text,
  HStack,
  IconButton,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { ResizableFrame } from '@/components/ResizableFrame';
import { CodeSample } from '@/components/CodeSample';
import { getExampleUrl } from '@/utils/getExampleUrl';
import { Category, SubCategory, Template } from '../data/types';

type ExampleProps = {
  template: Template;
  category: Category;
  subCategory: SubCategory;
};

const TABS = ['Preview', 'Code'];

export const Example = ({ template, category, subCategory }: ExampleProps) => {
  return (
    <Box
      rounded={'md'}
      borderWidth={1}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
      id={template.filename}
      height={'full'}
      style={{
        scrollMarginTop: '2rem',
      }}>
      <Tabs variant="soft-rounded" colorScheme="green" size={'sm'}>
        <TabList
          alignItems={'center'}
          justifyContent={'space-between'}
          flexDirection={{ base: 'column', md: 'row' }}
          py={2}
          px={4}
          borderBottomWidth={1}
          borderBottomStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}>
          <Text
            color={useColorModeValue('gray.700', 'gray.300')}
            fontSize={'sm'}
            mb={{ base: 4, md: 0 }}>
            {template.name}
          </Text>
          <HStack spacing={4} color={useColorModeValue('gray.500', 'gray.300')}>
            {TABS.map((tab) => (
              <Tab
                key={tab}
                fontSize={'xs'}
                fontWeight={400}
                _selected={{
                  bg: useColorModeValue('green.50', 'green.900'),
                  color: useColorModeValue('green.500', 'green.400'),
                }}>
                {tab}
              </Tab>
            ))}
            <Link
              href={getExampleUrl(category, subCategory, template)}
              passHref>
              <IconButton
                as={'a'}
                cursor={'pointer'}
                icon={<ExternalLinkIcon />}
                size={'sm'}
                variant={'ghost'}
                aria-label={'Open in Fullscreen'}
                title={'Open in Fullscreen'}
                target="_blank"
              />
            </Link>
          </HStack>
        </TabList>
        <TabPanels borderRadius="2xl">
          <TabPanel p={0}>
            <ResizableFrame
              category={category}
              subCategory={subCategory}
              template={template}
            />
          </TabPanel>
          <TabPanel p={0}>
            <CodeSample
              category={category}
              subCategory={subCategory}
              template={template}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
