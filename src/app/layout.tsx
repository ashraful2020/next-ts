import Nav from '@/components/Nav'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

export default function RootLayout({
  children,
}: {
  
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head/>
      <body className={inter.className}>
 
        {children}
      </body>
    </html>
  )
}
