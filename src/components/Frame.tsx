import { FunctionComponent, useEffect, useReducer, useState } from 'react';
import { createPortal } from 'react-dom';
import createCache from '@emotion/cache';
import weakMemoize from '@emotion/weak-memoize';
import { CacheProvider } from '@emotion/react';
import { ChakraProvider, useColorMode } from '@chakra-ui/react';

const memoizedCreateCacheWithContainer = weakMemoize(
  (container: HTMLElement) => {
    return createCache({
      container,
      key: 'with-emotion',
    });
  }
);

const MIN_HEIGHT = 222;

export const Frame: FunctionComponent = ({ children }) => {
  const [frameRef, setFrameRef] = useState<HTMLIFrameElement | null>(null);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const { colorMode } = useColorMode();

  const doc = frameRef?.contentWindow?.document;
  const mountNode = doc?.body;
  const insertionPoint = doc?.head;

  const updateFrame = () => {
    forceUpdate();
  };

  // Todo: Update frame height when resizing the frame/browser
  useEffect(() => {
    if (frameRef) {
      const frameHeight = frameRef?.contentWindow?.document.body.offsetHeight;
      setHeight(frameHeight);
    }
  }, [frameRef]);

  const getHeight = () =>
    height !== undefined && height >= MIN_HEIGHT ? height : MIN_HEIGHT;

  useEffect(() => {
    frameRef?.contentWindow?.location.reload();
  }, [colorMode]);

  return (
    <iframe
      srcDoc={`<!--<!DOCTYPE html>-->`}
      width="100%"
      title="Preview"
      ref={setFrameRef}
      loading={'lazy'}
      height={getHeight()}
      onLoad={updateFrame}>
      {insertionPoint &&
        mountNode &&
        createPortal(
          <CacheProvider
            value={memoizedCreateCacheWithContainer(insertionPoint)}>
            <ChakraProvider>{children}</ChakraProvider>
          </CacheProvider>,
          mountNode
        )}
    </iframe>
  );
};
