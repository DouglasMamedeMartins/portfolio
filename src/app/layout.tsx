import { Inter } from 'next/font/google'

import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Projeto de portfólio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
