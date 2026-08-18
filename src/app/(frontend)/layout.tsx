import React from 'react'
import { Montserrat } from 'next/font/google'
import './globals.css'

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
    <html lang="en" className={`${montserrat.variable} scroll-smooth`}>
      <body className="font-body bg-body text-text transition-colors duration-400">
        <main>{children}</main>
      </body>
    </html>
  )
}
