import { ReactNode } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Link, Stack, Text, StackProps } from '@chakra-ui/react';

import { data } from '../data';

const NavigationLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  const { asPath } = useRouter();

  const isActive = asPath === href;

  return (
    <NextLink href={href} passHref>
      <Link
        fontWeight={500}
        fontSize={'sm'}
        rounded={'md'}
        p={2}
        bg={isActive ? 'green.50' : undefined}
        color={isActive ? 'green.700' : 'gray.700'}
        _hover={{
          bg: isActive ? 'green.50' : 'gray.100',
        }}>
        {children}
      </Link>
    </NextLink>
  );
};

export const Navigation = (props: StackProps) => {
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
            fontFamily={'heading'}
            textTransform={'uppercase'}
            color={'gray.400'}
            fontWeight={700}
            fontSize={'sm'}
            letterSpacing={1.1}>
            {category.name}
          </Text>
          <Stack>
            {category.children?.map((subCategory) => (
              <NavigationLink
                key={subCategory.id}
                href={`/${category.id}/${subCategory.id}`}>
                {subCategory.name}
              </NavigationLink>
            ))}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};
