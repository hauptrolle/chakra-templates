import { Work_Sans, Inter } from 'next/font/google'
import { extendTheme } from '@chakra-ui/react'

const work = Work_Sans({
  variable: '--font-work-sans',
  weight: ['700'],
  subsets: ['latin']
})

const inter = Inter({
  variable: '--font-inter',
  weight: ['400', '500', '600'],
  subsets: ['latin']
})

export const theme = extendTheme({
  fonts: {
    body: inter.style.fontFamily,
    heading: work.style.fontFamily
  },
  colors: {
    discord: '#7289da'
  },
  shadows: {
    largeSoft: 'rgba(60, 64, 67, 0.15) 0px 2px 10px 6px;'
  },
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth'
      },
      body: {
        minHeight: '100vh',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        textRendering: 'optimizeLegibility'
      },
      '.body': {
        // todo check how to do this without breaking the site
        // height: '100%', // Push footer to bottom
        overflowY: 'scroll' // Always show scrollbar to avoid flickering
      },
      '#nprogress': {
        pointerEvents: 'none'
      },
      '#nprogress .bar': {
        background: 'green.200',
        position: 'fixed',
        zIndex: '1031',
        top: 0,
        left: 0,
        width: '100%',
        height: '2px'
      }
    }
  }
})
