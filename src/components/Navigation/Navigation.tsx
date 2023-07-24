'use client'

import { usePathname } from 'next/navigation'
import { Box, Stack, Text, StackProps, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'

import { data } from '../../data'
import { GITHUB_LINK } from '../../config/constants'

interface Props {
  href: string
  children: React.ReactNode
  pathname: string
}

const NavigationLink = (props: Props) => {
  const { href, children, pathname } = props
  const isActive = pathname === href

  const activeBg = useColorModeValue('green.50', 'green.900')

  return (
    <Box
      href={href}
      fontSize={'sm'}
      rounded={'md'}
      px={3}
      py={2}
      ml={'-12px!important'}
      bg={isActive ? activeBg : undefined}
      fontWeight={isActive ? 600 : 400}
      color={
        isActive
          ? // eslint-disable-next-line react-hooks/rules-of-hooks
            useColorModeValue('green.700', 'green.400')
          : // eslint-disable-next-line react-hooks/rules-of-hooks
            useColorModeValue('gray.700', 'gray.300')
      }
      _hover={{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg: isActive ? activeBg : useColorModeValue('gray.100', 'gray.900'),
      }}
      as={Link}>
      {children}
    </Box>
  )
}

export const Navigation = (props: StackProps) => {
  const pathname = usePathname()
  const categoryColor = useColorModeValue('gray.800', 'gray.200')

  return (
    <Stack
      as={'nav'}
      spacing={6}
      maxW={{ md: '3xs' }}
      w={'full'}
      flexShrink={0}
      {...props}>
      {data.map((category) => (
        <Stack key={category.id}>
          <Text
            textTransform={'uppercase'}
            color={categoryColor}
            fontWeight={700}
            fontSize="sm"
            letterSpacing={1}>
            {category.name}
          </Text>
          <Stack spacing={1} marginTop={1} marginBottom={4}>
            {category.children?.map((subCategory) => (
              <NavigationLink
                pathname={pathname}
                key={subCategory.id}
                href={`/${category.id}/${subCategory.id}`}>
                {subCategory.name}
              </NavigationLink>
            ))}
          </Stack>
        </Stack>
      ))}
      <Stack
        spacing={2}
        bg={useColorModeValue('gray.50', 'gray.900')}
        rounded={'md'}
        p={{ base: 4 }}>
        <Text fontWeight={700} fontSize={'sm'}>
          These are not the templates you are looking for?
        </Text>
        <Text fontSize={'sm'}>
          Feel free to contribute your own template in our{' '}
          <Link href={GITHUB_LINK} target={'_blank'} color={'green.400'}>
            Github
          </Link>{' '}
          Repository.
        </Text>
      </Stack>
    </Stack>
  )
}
