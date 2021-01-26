import { ReactNode } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  Link,
  Stack,
  Text,
  StackProps,
  useColorModeValue,
} from '@chakra-ui/react';

import { data } from '../data';
import { GITHUB_LINK } from '../constants';

const NavigationLink = ({
  href,
  children,
  asPath,
}: {
  href: string;
  children: ReactNode;
  asPath: string;
}) => {
  const isActive = asPath === href;

  const activeBg = useColorModeValue('green.50', 'green.900');

  return (
    <NextLink href={href} passHref>
      <Link
        fontSize={'sm'}
        rounded={'md'}
        px={3}
        py={2}
        ml={'-12px!important'}
        bg={isActive ? activeBg : undefined}
        fontWeight={isActive ? 600 : 400}
        color={
          isActive
            ? useColorModeValue('green.700', 'green.400')
            : useColorModeValue('gray.700', 'gray.300')
        }
        _hover={{
          bg: isActive ? activeBg : useColorModeValue('gray.100', 'gray.900'),
        }}>
        {children}
      </Link>
    </NextLink>
  );
};

export const Navigation = (props: StackProps) => {
  const { asPath } = useRouter();
  const categoryColor = useColorModeValue('gray.800', 'gray.200');

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
            fontSize={'sm'}
            letterSpacing={1}>
            {category.name}
          </Text>
          <Stack spacing={1}>
            {category.children?.map((subCategory) => (
              <NavigationLink
                asPath={asPath}
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
  );
};
