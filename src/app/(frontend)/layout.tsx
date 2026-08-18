import React from 'react'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/app/(frontend)/components/theme/ThemeProvider'
import { Navbar } from '@/app/(frontend)/components/layout/Navbar'
import { Footer } from '@/app/(frontend)/components/layout/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: "Tareq Monower Tamim's Portfolio",
  description: 'WordPress & Frontend Developer - Portfolio showcasing recent works, skills, and services',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={`${montserrat.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-body bg-body text-text transition-colors duration-400">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
