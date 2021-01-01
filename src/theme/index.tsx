import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
      "#nprogress": {
        pointerEvents: "none",
      },
      "#nprogress .bar": {
        background: "teal.200",
        position: "fixed",
        zIndex: "1031",
        top: 0,
        left: 0,
        width: "100%",
        height: "2px",
      },
    },
  },
});
