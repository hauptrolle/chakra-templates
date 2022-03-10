import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  IconButton,
  Button,
  Stack,
  Flex,
} from '@chakra-ui/react';

import { BsThreeDotsVertical, BsChatSquareQuote } from 'react-icons/bs';
import { RiShutDownLine, RiRestartLine, RiFileShredLine } from 'react-icons/ri';

export default function ServerSecondaryOptions() {
  return (
    /**
     * You may move the Popover outside Flex.
     */
    <Flex justifyContent="center" mt={4}>
      <Popover placement="bottom" isLazy>
        <PopoverTrigger>
          <IconButton
            aria-label="More server options"
            icon={<BsThreeDotsVertical />}
            variant="solid"
            w="fit-content"
          />
        </PopoverTrigger>
        <PopoverContent w="fit-content" _focus={{ boxShadow: 'none' }}>
          <PopoverArrow />
          <PopoverBody>
            <Stack>
              <Button
                w="194px"
                variant="ghost"
                rightIcon={<BsChatSquareQuote />}
                justifyContent="space-between"
                fontWeight="normal"
                fontSize="sm">
                Request Access
              </Button>
              <Button
                w="194px"
                variant="ghost"
                rightIcon={<RiFileShredLine />}
                justifyContent="space-between"
                fontWeight="normal"
                colorScheme="red"
                fontSize="sm">
                Purge Redis Cache
              </Button>
              <Button
                w="194px"
                variant="ghost"
                rightIcon={<RiRestartLine />}
                justifyContent="space-between"
                fontWeight="normal"
                colorScheme="red"
                fontSize="sm">
                Restart Server
              </Button>
              <Button
                w="194px"
                variant="ghost"
                rightIcon={<RiShutDownLine />}
                justifyContent="space-between"
                fontWeight="normal"
                colorScheme="red"
                fontSize="sm">
                Disable Server
              </Button>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
}
