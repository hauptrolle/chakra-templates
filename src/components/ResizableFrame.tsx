import { useEffect, useRef, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { Resizable } from 're-resizable';

type IframeProps = {
  src: string;
};

const MIN_HEIGHT = 222;

export const ResizableFrame = ({ src }: IframeProps) => {
  const ref = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState<number | undefined>(undefined);

  const syncHeight = () => {
    const frameHeight = ref.current?.contentWindow?.document.body.offsetHeight;

    setHeight(frameHeight);
  };

  useEffect(() => {
    ref.current?.addEventListener('load', syncHeight);

    return () => {
      ref.current?.removeEventListener('load', syncHeight);
    };
  }, []);

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
        <iframe width={'100%'} height={getHeight()} src={src} ref={ref} />
      </Resizable>
    </Box>
  );
};
