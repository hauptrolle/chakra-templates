import { SyntheticEvent } from 'react'
import {
  Box,
  Collapse,
  Flex,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import Link from 'next/link'

import { NAV_ITEMS, NavItem } from '#/components/Header/navData'

interface MobileNavProps {
  isOpen: boolean
}

export const MobileNav = ({ isOpen }: MobileNavProps) => {
  if (!isOpen) return null

  return (
    <Stack
      p={4}
      display={{ md: 'none' }}
      zIndex={9999}
      pos="fixed"
      top="60px"
      w={'full'}
      bg={'white'}
      minH={'calc(100vh - 60px)'}
      css={{
        backdropFilter: 'saturate(180%) blur(5px)',
        // eslint-disable-next-line react-hooks/rules-of-hooks
        backgroundColor: useColorModeValue(
          'rgba(255, 255, 255, 0.8)',
          'rgba(26, 32, 44, 0.8)',
        ),
      }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ href, children, label }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  const handleToggle = (e: SyntheticEvent) => {
    if (children) {
      e.preventDefault()
      onToggle()
    }
  }

  return (
    <Stack spacing={4} onClick={handleToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Box href={child.href!} key={child.label} py={2} as={Link}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}
