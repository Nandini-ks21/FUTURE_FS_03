import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pinterest AI - Discover Inspiration',
  description: 'AI-powered visual discovery platform with modern design and intelligent recommendations',
  keywords: 'pinterest, ai, inspiration, design, discovery, visual content',
  authors: [{ name: 'AI Design Team' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
          {children}
        </div>
      </body>
    </html>
  )
}
