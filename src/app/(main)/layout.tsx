import type { Metadata } from 'next/types'

import { InitializeChakra } from '#/components/InitializeChakra'
import { Header } from '#/components/Header'
import { Footer } from '#/components/Footer'

interface Props {
  children: React.ReactNode
}

export const metadata: Metadata = {
  metadataBase: new URL('https://chakra-templates.dev/'),
  title: 'Chakra Templates',
  description:
    'A growing open-source collection of hand-crafted Chakra UI templates ready to drop into your React project.',
  keywords:
    'chakra ui, ui templates, web templates, web design, react templates, react ui templates, chakra ui templates, chakra templates',
  openGraph: {
    type: 'website',
    title: 'Chakra Templates',
    description:
      'A growing open-source collection of hand-crafted Chakra UI templates ready to drop into your React project.',
    images: 'https://chakra-templates.dev/favicon.png',
    siteName: 'Chakra Templates',
    url: 'https://chakra-templates.dev/',
  },
  twitter: {
    title: 'Chakra Templates',
    description:
      'A growing open-source collection of hand-crafted Chakra UI templates ready to drop into your React project.',
    images: 'https://chakra-templates.dev/favicon.png',
    card: 'summary_large_image',
  },
}

const AppLayout = (props: Props) => {
  const { children } = props

  return (
    <InitializeChakra>
      <Header />
      {children}
      <Footer />
    </InitializeChakra>
  )
}

export default AppLayout
