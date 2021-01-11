import NextLink from 'next/link';
import { Link, Stack, Text, StackProps } from '@chakra-ui/react';

import { data } from '../data';

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
              <NextLink
                key={subCategory.id}
                href={`/${category.id}/${subCategory.id}`}
                passHref>
                <Link fontWeight={500} color={'gray.700'} fontSize={'sm'}>
                  {subCategory.name}
                </Link>
              </NextLink>
            ))}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};
