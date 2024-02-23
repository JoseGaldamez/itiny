import type { Metadata } from 'next'
import './globals.css'

import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/providers/theme-provider'

export const metadata: Metadata = {
  title: 'iTiny Link | Shorten your URLs',
  description: 'Shorten your URLs never was so easy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="iTiny Link | Shorten your URLs" />
        <meta property="og:description" content="Shorten your URLs never was so easy" />
        <meta property="og:image" content="./itiny-back.jpg" />

        <link rel="preload" as="image" href="./itiny-back.jpg"></link>

        <meta property="image" content="./itiny-back.jpg" />

        <meta name="twitter:title" content="iTiny Link | Shorten your URLs" />
        <meta name="twitter:description" content="Shorten your URLs never was so easy" />
        <meta name="twitter:image" content="./itiny-back.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
