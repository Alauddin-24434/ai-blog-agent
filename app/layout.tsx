import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "AI Blog Agent",
  description:
    "Generate SEO-optimized blog content with AI-powered keyword research, content creation, and optimization tools",
  generator: "ContentAI Pro",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
 <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <div className="min-h-screen bg-background">{children}</div>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
