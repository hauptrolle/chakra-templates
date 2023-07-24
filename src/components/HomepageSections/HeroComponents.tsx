'use client'

import { useTransform, useScroll } from 'framer-motion'
import { useBreakpointValue, Image, useColorModeValue } from '@chakra-ui/react'

import MotionBox from '../motion/MotionBox'

export const HeroComponents = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false })
  const { scrollYProgress } = useScroll()

  const offsetFirst = useTransform(scrollYProgress, [0, 1], [0, -500])
  const offsetSecond = useTransform(scrollYProgress, [0.2, 1], [0, -500])
  const offsetThird = useTransform(scrollYProgress, [0.4, 1], [0, -500])
  const offsetFourth = useTransform(scrollYProgress, [0.6, 1], [0, -500])
  const offsets = [offsetFirst, offsetSecond, offsetThird, offsetFourth]

  const widths = [384, 320, 288, 256]

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
  }

  return (
    <MotionBox
      w={{ base: '100%', md: 384 }}
      h={295}
      mb={20}
      initial={'initial'}
      animate={'show'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      position={'relative'}
      transition={{ staggerChildren: 0.15 }}>
      {[0, 1, 2, 3].map((i) => (
        <MotionBox
          key={i}
          style={{ translateY: isMobile ? 0 : offsets[i] }}
          opacity={0}
          position={'absolute'}
          bottom={0}
          mb={3 - i * 20}
          variants={cardAnimationVariants}
          justify={'center'}
          align={'center'}
          flex={1}
          p={8}
          // eslint-disable-next-line react-hooks/rules-of-hooks
          bg={useColorModeValue('white', 'gray.800')}
          rounded={'3xl'}
          boxShadow={'xl'}
          w={{ base: `${100 - i * 10}%`, sm: widths[i] }}
          zIndex={4 - i}>
          <Image alt={'Component Placeholder'} src={`/images/component-${i + 1}.svg`} />
        </MotionBox>
      ))}
    </MotionBox>
  )
}
