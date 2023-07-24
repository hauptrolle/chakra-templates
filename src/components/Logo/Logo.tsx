'use client'

import { Icon, IconProps, useColorModeValue, useTheme } from '@chakra-ui/react'

export const Logo = (props: IconProps) => {
  const theme = useTheme()

  const foreground = useColorModeValue(theme.colors.green[400], theme.colors.green[400])
  const background = useColorModeValue(theme.colors.green[100], theme.colors.green[900])

  return (
    <Icon
      width="274"
      height="426"
      viewBox="0 0 274 426"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M118.368 235.196H42.4719C33.2437 235.196 27.4691 225.214 32.069 217.214L135.965 36.5257C142.091 25.8727 158.368 30.2189 158.368 42.5073V195.196C158.368 217.288 140.459 235.196 118.368 235.196Z"
        fill={background}
      />
      <path
        d="M186 221L261.896 221C271.124 221 276.899 230.982 272.299 238.982L168.403 419.67C162.277 430.323 146 425.977 146 413.689L146 261C146 238.909 163.909 221 186 221Z"
        fill={background}
      />
      <path
        d="M88.368 205.196H12.4719C3.24374 205.196 -2.53095 195.214 2.06904 187.214L105.965 6.52568C112.091 -4.12725 128.368 0.218895 128.368 12.5073V165.196C128.368 187.288 110.459 205.196 88.368 205.196Z"
        fill={foreground}
      />
      <path
        d="M156 191L231.896 191C241.124 191 246.899 200.982 242.299 208.982L138.403 389.67C132.277 400.323 116 395.977 116 383.689L116 231C116 208.909 133.909 191 156 191Z"
        fill={foreground}
      />
    </Icon>
  )
}
