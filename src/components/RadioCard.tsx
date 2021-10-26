import React from 'react';
import { Box, useRadio, UseRadioProps } from '@chakra-ui/react';

type RadioCardProps = {
  children: React.ReactNode;
} & UseRadioProps;

const RadioCard: React.VFC<RadioCardProps> = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: 'teal.600',
          color: 'white',
          borderColor: 'teal.600',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={2}
        py={2}>
        {props.children}
      </Box>
    </Box>
  );
};
export default RadioCard;
