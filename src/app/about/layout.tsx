import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "about",
  description: "Welcome to Next.js",
};
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
 
        {children}
      </body>
    </html>
  );
}
