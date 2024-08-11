import './globals.css'
import React from "react"
import { Poppins as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'
// import { Toaster } from '@/components/ui/toaster'
import { Metadata } from 'next'
// import { ThemeProvider } from '@/components/shared/theme-provider'
// import { APP_DESCRIPTION, APP_NAME } from '@/lib/constants'

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-sans',
})
export const metadata: Metadata = {
  title: "Universe Pink",
  description:"Create Universe PinK by Next JS"
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >    
          {children}
      </body>
    </html>
  )
}