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
  Center,
  useRadioGroup,
  useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import { MdDesktopMac, MdOutlineSmartphone, MdTabletMac } from 'react-icons/md';

import { ResizableFrame } from '@/components/ResizableFrame';
import { CodeSample } from '@/components/CodeSample';
import { getExampleUrl } from '@/utils/getExampleUrl';
import { Category, SubCategory, Template } from '../data/types';
import RadioCard from './RadioCard';

type ExampleProps = {
  template: Template;
  category: Category;
  subCategory: SubCategory;
};

const TABS = ['Preview', 'Code'];

export const Example = ({ template, category, subCategory }: ExampleProps) => {
  const IsNotSmartPhoneWidth = useBreakpointValue([false, true]);
  const [viewWidth, setviewWidth] = useState('full');
  const [tabIndex, setTabIndex] = React.useState(0);
  const options = [
    {
      label: 'smart phone',
      width: '380px',
      icon: <MdOutlineSmartphone />,
    },
    {
      label: 'Tablet',
      width: '600px',
      icon: <MdTabletMac />,
    },
    {
      label: 'PC',
      width: 'full',
      icon: <MdDesktopMac />,
    },
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'displaySize',
    defaultValue: options[2].width,
    onChange: setviewWidth,
  });

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
      <Tabs
        variant="soft-rounded"
        colorScheme="green"
        size={'sm'}
        onChange={(index) => {
          setTabIndex(index);
          console.log(tabIndex);
        }}>
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
            {tabIndex === 0 && IsNotSmartPhoneWidth && (
              <HStack>
                {options.map((value) => {
                  const label = value.width;
                  const radio = getRadioProps({ value: label });
                  return (
                    <RadioCard key={value.label} {...radio}>
                      {value.icon}
                    </RadioCard>
                  );
                })}
              </HStack>
            )}

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
            <Center w="full" bg={useColorModeValue('gray.100', 'gray.900')}>
              <Box w={viewWidth}>
                <ResizableFrame
                  category={category}
                  subCategory={subCategory}
                  template={template}
                />
              </Box>
            </Center>
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
