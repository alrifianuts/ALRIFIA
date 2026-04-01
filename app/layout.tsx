import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Cairo, Montserrat } from "next/font/google"

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "الريفية - RIFIA | Premium Saudi Nuts",
  description: "علامة تجارية سعودية راقية متخصصة في إنتاج المكسرات الطبيعية عالية الجودة من مدينة الجبيل الصناعية",
  keywords: "مكسرات, السعودية, الريفية, RIFIA, nuts, Saudi Arabia, Jubail",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" className={`${cairo.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  )
}
