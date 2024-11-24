import { Montserrat, Playfair_Display } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata = {
  title: "UNESCO Society - Mahinda Rajapaksha College Matara",
  description: "Official website of the UNESCO Society at Mahinda Rajapaksha College Matara",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${montserrat.variable} ${playfair.variable}`}>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}

