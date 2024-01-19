import type { Metadata } from 'next'
import './globals.css'

import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/providers/theme-provider'

export const metadata: Metadata = {
  title: 'iTiny',
  description: 'Shorten your URLs never was so easy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
