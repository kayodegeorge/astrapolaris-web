import '../style/index.scss'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home - Astra-Polaris Microfinance Bank',
  description: 'Home - Astra-Polaris Microfinance Bank',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <meta name='description' content='Description?' />
        <link rel='icon' href='favicon.ico' sizes='any' />
        {/* <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;800;900&family=Kumbh+Sans:wght@400;500;600;700;800&display=swap'
        /> */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
