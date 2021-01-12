import { useTransform, useViewportScroll } from 'framer-motion';
import { useBreakpointValue } from '@chakra-ui/react';

import MotionBox from '@/components/motion/MotionBox';

export const HeroComponents = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const heights = useBreakpointValue([100, 215, 332]) ?? 100;
  const { scrollYProgress } = useViewportScroll();

  const offsetFirst = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const offsetSecond = useTransform(scrollYProgress, [0.2, 1], [0, -500]);
  const offsetThird = useTransform(scrollYProgress, [0.4, 1], [0, -500]);
  const offsetFourth = useTransform(scrollYProgress, [0.6, 1], [0, -500]);
  const offsets = [offsetFirst, offsetSecond, offsetThird, offsetFourth];

  const widths = [384, 320, 288, 256];

  const cardAnimationVariants = {
    initial: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <MotionBox
      w={{ base: '100%', md: 384 }}
      h={424}
      initial={'initial'}
      animate={'show'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      transition={{ staggerChildren: 0.15 }}>
      {[0, 1, 2, 3].map((i) => (
        <MotionBox
          key={i}
          style={{ translateY: isMobile ? 0 : offsets[i] }}
          opacity={0}
          variants={cardAnimationVariants}
          justify={'center'}
          flex={1}
          p={4}
          mt={i === 0 ? 0 : { base: heights * -3.5, sm: heights * -1 }}
          bg={'white'}
          rounded={'3xl'}
          boxShadow={'xl'}
          h={heights}
          w={{ base: `${100 - i * 10}%`, sm: widths[i] }}
          zIndex={4 - i}
        />
      ))}
    </MotionBox>
  );
};
