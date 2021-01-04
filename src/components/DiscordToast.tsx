import { forwardRef, ForwardedRef, useEffect } from "react";
import {
  Box,
  Image,
  createStandaloneToast,
  Stack,
  Text,
  useToken,
  chakra,
  BoxProps,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

import { DISCORD_INVITE_LINK } from "../constants";
import DiscordLogo from "./DiscordLogo";

const MotionBox = motion.custom(
  forwardRef((props: BoxProps, ref: ForwardedRef<HTMLDivElement>) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <chakra.div ref={ref} {...chakraProps} />;
  })
);

export const DiscordToast = () => {
  const discordColor = useToken("colors", "discord");
  const discordToast = createStandaloneToast({
    colorMode: "light",
    defaultOptions: {
      id: "discord-toast",
      position: "bottom-right",
      isClosable: false,
      duration: null,
      render: () => (
        <a href={DISCORD_INVITE_LINK} target="_blank">
          <MotionBox
            variants={{
              shake: {
                rotate: [0, 5, -5, 5, -5, 5, 0],
                transition: { delay: 0.2 },
              },
            }}
            animate="shake"
            rounded={"md"}
            bg={discordColor}
            mb={6}
            mr={6}
          >
            <Box
              p={4}
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
            >
              <DiscordLogo />
              <Stack ml={4}>
                <Text as={"h3"} color={"white"}>
                  Join our Discord server!
                </Text>
              </Stack>
            </Box>
          </MotionBox>
        </a>
      ),
    },
  });
  useEffect(() => {
    if (!discordToast.isActive("discord-toast")) {
      discordToast();
    }
  }, []);
  return <></>;
};
