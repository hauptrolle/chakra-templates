import { Box, forwardRef } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';

const MotionBox = motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Box ref={ref} {...chakraProps} />;
  })
);

export default MotionBox;
