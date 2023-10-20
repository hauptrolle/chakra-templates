'use client'

import React from 'react'
import Link from 'next/link'
import { Box, IconButton, Flex, Button, Image } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'

// And react-slick as our Carousel Lib
import Slider from 'react-slick'

// Css file to add curved effect
import Styles from './curvedCarousel.module.css'

// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 3.2,
  centerPadding: '50px',
  slidesToScroll: 1,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3.1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.05,
      },
    },
  ],
}

export default function CurvedCarousel() {
  const [slider, setSlider] = React.useState<Slider | null>(null)

  // This can be static or loaded from a server
  const sliderData = [
    {
      title: 'Image 1',
      image:
        'https://images.unsplash.com/photo-1694445083738-1e1f6104e9e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NzgxNTc5NQ&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
      title: 'Image 2',
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2l0eSxuaWdodHx8fHx8fDE2OTc4MTU2NTU&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    },
    {
      title: 'Image 3',
      image:
        'https://images.unsplash.com/photo-1546937825-0c1cd25a852c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NzgxNTkwOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    },
    {
      title: 'Image 4',
      image: 'https://source.unsplash.com/random',
    },
  ]

  return (
    <Box position={'relative'} width={'full'}>
      {/* CSS files for react-slick */}
      <>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </>

      <Box>
        <Slider
          {...settings}
          ref={(slider) => setSlider(slider)}
          className={Styles['curved-slider']}>
          {sliderData.map((item, index) => (
            <Box key={index}>
              <Box height={'284px'} bg={`red.${index + 1}00`} mx={'5px'}>
                <Image
                  // src="https://source.unsplash.com/random/500x300"
                  height={'full'}
                  width={'full'}
                  src={item.image}
                  alt={item.title}
                  objectFit={'cover'}
                />
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
      <Flex
        maxW={'8xl'}
        mx={'auto'}
        flexDir={['column-reverse', 'row']}
        alignItems={'center'}
        gap={[4, 2]}
        p={[4, 8]}>
        <Flex flex={1} alignItems={'center'} justifyContent={'center'}>
          <Button
            as={Link}
            href={'#'}
            color={'white'}
            px={8}
            size="lg"
            colorScheme="orange"
            rightIcon={<ExternalLinkIcon />}>
            Explore More
          </Button>
        </Flex>

        {/* Prev and Next button of slider*/}
        <Flex w={['full', 'auto']} justifyContent={'flex-end'} gap={2}>
          <IconButton
            aria-label="left-icon"
            size={'sm'}
            variant={'outline'}
            colorScheme="orange"
            icon={<ChevronLeftIcon w={6} h={6} />}
            onClick={() => slider?.slickPrev()}
          />
          <IconButton
            aria-label="right-icon"
            size={'sm'}
            variant={'outline'}
            colorScheme="orange"
            icon={<ChevronRightIcon w={6} h={6} />}
            onClick={() => slider?.slickNext()}
          />
        </Flex>
      </Flex>
    </Box>
  )
}
