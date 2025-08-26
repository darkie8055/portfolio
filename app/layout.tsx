import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Sanjay B K - Frontend & Full-Stack Developer",
  description:
    "Professional portfolio of Sanjay B K, showcasing expertise in React.js, Full-Stack Development, and innovative projects with 3D interactive experiences.",
  keywords: "Frontend Developer, Full-Stack Developer, React.js, JavaScript, Portfolio, 3D Web Development",
  authors: [{ name: "Sanjay B K" }],
  openGraph: {
    title: "Sanjay B K - Frontend & Full-Stack Developer",
    description: "Professional portfolio showcasing innovative web development projects and technical expertise.",
    type: "website",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
