'use client'
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Drawer,
  DrawerContent,
  Divider,
  CloseButton,
} from '@chakra-ui/react'
import { HamburgerIcon, ChevronRightIcon, ArrowBackIcon } from '@chakra-ui/icons'

export default function WithMultiLevel() {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onOpen}
            icon={<HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Open Navgation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            Logo
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'}>
            Sign In
          </Button>
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'green.400'}
            href={'#'}
            _hover={{
              bg: 'green.300',
            }}>
            Sign Up
          </Button>
        </Stack>
      </Flex>

      <MobileNav isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'xs'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = (subNavItem: NavItem) => {
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')
  return (
    <Popover trigger={'hover'} placement={'left-start'}>
      <PopoverTrigger>
        <Box
          as="a"
          href={subNavItem.href}
          role={'group'}
          display={'block'}
          p={2}
          rounded={'md'}
          _hover={{ bg: useColorModeValue('green.50', 'gray.900') }}>
          <Stack direction={'row'} align={'center'}>
            <Box>
              <Text
                transition={'all .3s ease'}
                _groupHover={{ color: 'green.400' }}
                fontWeight={500}>
                {subNavItem.label}
              </Text>
              {subNavItem.subLabel && <Text fontSize={'sm'}>{subNavItem.subLabel}</Text>}
            </Box>
            {subNavItem.children && (
              <Flex justify={'flex-end'} align={'center'} flex={1}>
                <Icon color={'green.400'} w={5} h={5} as={ChevronRightIcon} />
              </Flex>
            )}
          </Stack>
        </Box>
      </PopoverTrigger>

      {subNavItem.children && (
        <PopoverContent
          border={0}
          boxShadow={'xl'}
          bg={popoverContentBgColor}
          p={4}
          w="fit-content"
          rounded={'xl'}>
          <Stack>
            {subNavItem.children.map((child) => (
              <DesktopSubNav key={child.label} {...child} />
            ))}
          </Stack>
        </PopoverContent>
      )}
    </Popover>
  )
}

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      returnFocusOnClose={false}
      onOverlayClick={onClose}
      size="full">
      <DrawerContent>
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            Logo
          </Text>
          <CloseButton onClick={onClose} />
        </Flex>
        <Stack
          bg={useColorModeValue('white', 'gray.800')}
          px={4}
          py={2}
          display={{ md: 'none' }}>
          {NAV_ITEMS.map((navItem) => (
            <MobileNavItem key={navItem.label} {...navItem} />
          ))}
        </Stack>
      </DrawerContent>
    </Drawer>
  )
}

const MobileNavItem = (navItem: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={2} onClick={navItem.children && onToggle} py={2}>
      <Box
        py={2}
        as="a"
        href={navItem.href}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          cursor: 'pointer',
        }}>
        <Stack direction={'row'}>
          {navItem.children && (
            <Icon
              as={ChevronRightIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(90deg)' : ''}
              w={6}
              h={6}
              color={'green'}
            />
          )}

          <Text
            fontWeight={600}
            fontSize="md"
            color={useColorModeValue('gray.600', 'gray.200')}
            pl={navItem.children ? '0' : '8'}>
            {navItem.label}
          </Text>
        </Stack>
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          pl={4}
          ml={4}
          py={2}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {navItem.children &&
            navItem.children.map((child) => (
              <MobileNavSubItem key={child.label} {...child} />
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

const MobileNavSubItem = (navItem: NavItem) => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Stack
        as="a"
        py={2}
        key={navItem.label}
        href={navItem.href}
        direction={'row'}
        justifyContent={'space-between'}
        onClick={onOpen}
        width={'full'}>
        <Text> {navItem.label}</Text>
        {navItem.children && <Icon as={ChevronRightIcon} w={6} h={6} color={'green'} />}
      </Stack>
      {navItem.children && (
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          size="full">
          <DrawerContent>
            <Stack px={4} pt={4}>
              <Stack direction={'column'} alignItems={'flex-start'}>
                <Button
                  leftIcon={<ArrowBackIcon />}
                  variant={'ghost'}
                  onClick={onClose}
                  px={1}>
                  Back
                </Button>
                <Text fontSize={'xl'} as="b" color="green">
                  {navItem.label}
                </Text>
                <Divider />
              </Stack>
              <Box pl={4}>
                {navItem.children &&
                  navItem.children.map((navItem) => (
                    <MobileNavItem key={navItem.label} {...navItem} />
                  ))}
              </Box>
            </Stack>
          </DrawerContent>
        </Drawer>
      )}
    </>
  )
}

interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Services',
    children: [
      {
        label: 'Graphic Design',
        subLabel: 'Visual communication excellence',
        href: '#',
        children: [
          {
            label: 'Logo Design',
            href: '#',
          },
          {
            label: 'Print Materials',
            href: '#',
          },
          {
            label: 'Brand Identity',
            href: '#',
          },
          {
            label: 'Packaging Design',
            href: '#',
          },
          {
            label: 'Digital Illustrations',
            href: '#',
          },
          {
            label: 'Infographic Design',
            href: '#',
          },
        ],
      },
      {
        label: 'UX/UI Design',
        subLabel: 'Enhance user experiences',
        href: '#',
        children: [
          {
            label: 'User Research',
            href: '#',
          },
          {
            label: 'Wireframing',
            href: '#',
          },
          {
            label: 'Prototype Development',
            href: '#',
          },
          {
            label: 'User Testing',
            href: '#',
          },
          {
            label: 'Information Architecture',
            href: '#',
          },
          {
            label: 'Interaction Design',
            href: '#',
          },
        ],
      },
      {
        label: 'Digital Marketing',
        subLabel: 'Boost your online presence',
        href: '#',
        children: [
          {
            label: 'SEO Strategies',
            href: '#',
          },
          {
            label: 'Social Media Campaigns',
            href: '#',
          },
          {
            label: 'Content Marketing',
            href: '#',
          },
          {
            label: 'Email Marketing',
            href: '#',
          },
          {
            label: 'Pay-Per-Click Advertising',
            href: '#',
          },
          {
            label: 'Analytics and Reporting',
            href: '#',
          },
        ],
      },
      {
        label: 'User Testing',
        subLabel: 'Users from all over the world',
        href: '#',
      },
    ],
  },

  {
    label: 'Portfolio',
    children: [
      {
        label: 'Web Projects',
        subLabel: 'Our web design showcase',
        href: '#',
        children: [
          {
            label: 'E-commerce Websites',
            href: '#',
          },
          {
            label: 'Corporate Websites',
            href: '#',
          },
        ],
      },
      {
        label: 'Graphic Projects',
        subLabel: 'Our graphic design portfolio',
        href: '#',
        children: [
          {
            label: 'Logo Design',
            href: '#',
          },
          {
            label: 'Print Materials',
            href: '#',
          },
        ],
      },
      {
        label: 'Marketing Campaigns',
        subLabel: 'Successful digital marketing stories',
        href: '#',
        children: [
          {
            label: 'Social Media Campaigns',
            href: '#',
          },
          {
            label: 'Email Marketing',
            href: '#',
          },
        ],
      },
    ],
  },
  {
    label: 'Careers',
    children: [
      {
        label: 'Software',
        children: [
          {
            label: 'Frontend Developer',
            href: '#',
          },
          {
            label: 'Backend Developer',
            href: '#',
          },
          {
            label: 'Full-stack Developer',
            href: '#',
          },
          {
            label: 'DevOps Engineer',
            href: '#',
          },
          {
            label: 'Mobile App Developer',
            href: '#',
          },
          {
            label: 'Software Architect',
            href: '#',
          },
        ],
      },
      {
        label: 'Design',
        children: [
          {
            label: 'Graphic Designer',
            href: '#',
          },
          {
            label: 'UX/UI Designer',
            href: '#',
          },
          {
            label: 'Motion Graphics Artist',
            href: '#',
          },
          {
            label: 'Brand Strategist',
            href: '#',
          },
          {
            label: 'Creative Director',
            href: '#',
          },
          {
            label: 'Illustrator',
            href: '#',
          },
        ],
      },
    ],
  },
  {
    label: 'Messages',
    href: '#',
  },
]
