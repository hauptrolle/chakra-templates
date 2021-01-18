import { useEffect, useRef, useState } from 'react';
import { Box, useColorMode } from '@chakra-ui/react';
import { Resizable } from 're-resizable';

type IframeProps = {
  src: string;
};

const MIN_HEIGHT = 222;

export const ResizableFrame = ({ src }: IframeProps) => {
  const ref = useRef<HTMLIFrameElement>(null);
  const { colorMode } = useColorMode();
  const [height, setHeight] = useState<number | undefined>(undefined);

  const syncHeight = () => {
    const frameHeight = ref.current?.contentWindow?.document.body.offsetHeight;

    setHeight(frameHeight);
  };

  // Reload iframe content when colorMode changes
  useEffect(() => {
    ref.current?.contentWindow?.location.reload();
  }, [colorMode]);

  const getHeight = () =>
    height !== undefined && height >= MIN_HEIGHT ? height : MIN_HEIGHT;

  return (
    <Box bg={'gray.500'}>
      <Resizable
        bounds={'parent'}
        minWidth={250}
        minHeight={getHeight()}
        maxHeight={getHeight()}
        onResize={syncHeight}>
        <iframe
          width={'100%'}
          height={getHeight()}
          src={src}
          onLoad={syncHeight}
          ref={ref}
        />
      </Resizable>
    </Box>
  );
};
