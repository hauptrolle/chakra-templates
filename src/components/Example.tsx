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
} from '@chakra-ui/react';
import Link from 'next/link';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { ResizableFrame } from '@/components/ResizableFrame';
import { CodeSample } from '@/components/CodeSample';
import { Template, Category, SubCategory } from 'data';

type ExampleProps = {
  template: Template;
  code: string;
  category: Category;
  subCategory: SubCategory;
};

const TABS = ['Preview', 'Code'];

export const Example = ({
  template,
  code,
  category,
  subCategory,
}: ExampleProps) => {
  const exampleLink = `/templates/${category.id}/${subCategory.id}/${template.filename}`;

  return (
    <Box
      rounded={'md'}
      borderWidth={1}
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
          borderBottomStyle={'solid'}>
          <Text color={'gray.700'} fontSize={'sm'} mb={{ base: 4, md: 0 }}>
            {template.name}
          </Text>
          <HStack spacing={4} color={'gray.500'}>
            {TABS.map((tab) => (
              <Tab
                key={tab}
                fontSize={'xs'}
                fontWeight={400}
                _selected={{
                  bg: 'green.50',
                  color: 'green.500',
                }}>
                {tab}
              </Tab>
            ))}
            <Link href={exampleLink} passHref>
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
            <ResizableFrame src={exampleLink} />
          </TabPanel>
          <TabPanel p={0}>
            <CodeSample code={code} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
