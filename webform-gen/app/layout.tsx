import './globals.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Webform-Gen',
  description: 'Webform bruhhhh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <h1>This is the layout</h1>
      </body>
    </html>
  )
}
