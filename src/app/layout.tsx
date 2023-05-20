 
import './globals.css'
import { Inter } from 'next/font/google'
// codeowners
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
      <body className={inter.className}>
     
        {children}
      </body>
    </html>
  )
}
