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
import { ReactNode } from 'react';
import Link from 'next/link';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { CodeSample } from '@/components/CodeSample';
import { getExampleUrl } from '@/utils/getExampleUrl';
import { Frame } from '@/components/Frame';

type PreviewProps = {
  template: {
    component: ReactNode;
    name: string;
  };
};

const TABS = ['Preview', 'Code'];

// Todo: add breakpoints selector
// Todo: show component source code

export const Preview = ({ template }: PreviewProps) => {
  return (
    <Box
      rounded={'md'}
      borderWidth={1}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
      id={template.name}
      height={'full'}
      style={{
        scrollMarginTop: '2rem',
      }}>
      <Tabs variant="soft-rounded" colorScheme="green" size={'sm'}>
        <TabList
          alignItems={'center'}
          justifyContent={'space-between'}
          flexDirection={{ base: 'column', md: 'row' }}
          py={3}
          px={4}
          borderBottomWidth={1}
          borderBottomStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}>
          <Text
            color={useColorModeValue('gray.800', 'gray.300')}
            fontSize={'md'}
            fontWeight={600}
            mb={{ base: 4, md: 0 }}>
            {template.name}
          </Text>
          <HStack spacing={4} color={useColorModeValue('gray.500', 'gray.300')}>
            {TABS.map((tab) => (
              <Tab
                key={tab}
                py={2}
                fontSize={'xs'}
                fontWeight={600}
                _selected={{
                  bg: useColorModeValue('green.100', 'green.900'),
                  color: useColorModeValue('green.500', 'green.400'),
                }}>
                {tab}
              </Tab>
            ))}
            {/*<Link*/}
            {/*  href={getExampleUrl(category, subCategory, template)}*/}
            {/*  passHref>*/}
            {/*  <IconButton*/}
            {/*    as={'a'}*/}
            {/*    cursor={'pointer'}*/}
            {/*    icon={<ExternalLinkIcon />}*/}
            {/*    size={'sm'}*/}
            {/*    variant={'ghost'}*/}
            {/*    aria-label={'Open in Fullscreen'}*/}
            {/*    title={'Open in Fullscreen'}*/}
            {/*    target="_blank"*/}
            {/*  />*/}
            {/*</Link>*/}
          </HStack>
        </TabList>
        <TabPanels borderRadius="2xl">
          <TabPanel p={0}>
            <Frame key={template.name}>{template.component}</Frame>
          </TabPanel>
          <TabPanel p={0}>
            {/*<CodeSample name={template.name} code={template.code} />*/}
            Code coming soon.
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
