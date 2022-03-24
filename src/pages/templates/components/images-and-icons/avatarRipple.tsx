import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  keyframes,
} from '@chakra-ui/react';

interface Props {
  size: string | number;
}

export default function AvatarWithRipple(props: Props) {
  const { size } = props;

  const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

  return (
    <Flex justifyContent="center" alignItems="center" h="216px" w="full">
      {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
      <Avatar
        as="div"
        src="https://danishshakeel.me/wp-content/uploads/2021/11/184520755_5799606673390269_2174238600447818537_n.jpeg.webp"
        size={'2xl'}
        position="relative"
        _before={{
          content: "''",
          position: 'relative',
          display: 'block',
          width: '300%',
          height: '300%',
          boxSizing: 'border-box',
          marginLeft: '-100%',
          marginTop: '-100%',
          borderRadius: '50%',
          bgColor: 'red',
          animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
        }}></Avatar>
    </Flex>
  );
}
