'use client'

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const ServerQuickActions = () => {
  return (
    /**
     * You may move the Popover outside Flex.
     */
    <Flex justifyContent="center" mt={4}>
      <Popover placement="bottom" isLazy>
        <PopoverTrigger>
          <Button rightIcon={<ChevronDownIcon />} colorScheme="green" w="fit-content">
            Quick Actions
          </Button>
        </PopoverTrigger>
        <PopoverContent _focus={{ boxShadown: 'none' }}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader fontWeight="bold">Quick Actions</PopoverHeader>
          <PopoverBody w="full">
            <Tabs isLazy colorScheme="green">
              <TabList>
                <Tab
                  _focus={{ boxShadow: 'none' }}
                  fontSize="xs"
                  fontWeight="bold"
                  w="50%">
                  Access
                </Tab>
                <Tab
                  _focus={{ boxShadow: 'none' }}
                  fontSize="xs"
                  fontWeight="bold"
                  w="50%">
                  Services
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  {/* You can add your content here. */}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Elementum curabitur
                  vitae nunc sed velit dignissim sodales ut eu. Mauris nunc congue nisi
                  vitae suscipit tellus mauris a diam. Eros in cursus turpis massa
                  tincidunt.
                </TabPanel>
                <TabPanel>
                  {/* You can add your content here. */}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Elementum curabitur
                  vitae nunc sed velit dignissim sodales ut eu. Mauris nunc congue nisi
                  vitae suscipit tellus mauris a diam. Eros in cursus turpis massa
                  tincidunt.
                </TabPanel>
              </TabPanels>
            </Tabs>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  )
}

export default ServerQuickActions
