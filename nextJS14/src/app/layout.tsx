import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin'
import type { Metadata } from 'next'
import { extractRouterConfig } from 'uploadthing/server'

import { ourFileRouter } from '@/app/api/uploadthing/core'
import ClientProvider from '@/providers/ClientProvider'

import './globals.css'

export const metadata: Metadata = {
  title: 'FT Site',
  description: 'A web project built by FT',
  category: 'food',
  authors: { name: 'FT' },
  keywords: [
    'Next.js',
    'React',
    'JavaScript'
  ],
  creator: 'FT',
  publisher: 'FT',
  openGraph: {
    title: 'FT',
    description: 'A web project built by FT',
    url: 'https://nsedich-development.vercel.app/',
    siteName: 'FT Site',
    images: 'https://nsedich-development.vercel.app/images/screenshoot.PNG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FT Site',
    description: 'A web project built by FT',
    images: ['https://nsedich-development.vercel.app/images/screenshoot.PNG'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <ClientProvider>
          <NextSSRPlugin
            /**
             * The `extractRouterConfig` will extract **only** the route configs
             * from the router to prevent additional information from being
             * leaked to the client. The data passed to the client is the same
             * as if you were to fetch `/api/uploadthing` directly.
             */
            routerConfig={extractRouterConfig(ourFileRouter)}
          />
          {children}
        </ClientProvider>
      </body>
    </html>
  )
}
