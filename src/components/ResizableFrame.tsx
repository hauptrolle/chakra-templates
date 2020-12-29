import { useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import { Resizable } from "re-resizable";

type IframeProps = {
  src: string;
};

export const ResizableFrame = ({ src }: IframeProps) => {
  const ref = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState<number | undefined>(undefined);

  const syncHeight = () => {
    const frameHeight = ref.current?.contentWindow?.document.body.offsetHeight;

    setHeight(frameHeight);
  };

  useEffect(() => {
    ref.current?.addEventListener("load", syncHeight);
  }, []);

  return (
    <Box bg={"gray.200"} p={4}>
      <Box>
        <Resizable
          bounds={"parent"}
          minWidth={320}
          minHeight={height}
          maxHeight={height}
          onResize={syncHeight}
        >
          <iframe width={"100%"} height={height} src={src} ref={ref} />
        </Resizable>
      </Box>
    </Box>
  );
};
