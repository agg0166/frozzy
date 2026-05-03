import type { Metadata, Viewport } from 'next'
import { Zalando_Sans_Expanded, PT_Serif } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { CartProvider } from '@/components/cart/cart-context'
import { AuthProvider } from '@/components/auth/auth-context'
import { DiscountPopup } from '@/components/home/discount-popup'

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans"
});

const zalando = Zalando_Sans_Expanded({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
});

export const metadata: Metadata = {
  title: 'Frozzy | Artisanal Ice Cream',
  description: 'Helados artesanales elaborados a mano con los mejores ingredientes. Descubre nuestros sabores únicos y participa en nuestros talleres de elaboración de helados.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#f5e6e8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${ptSerif.variable} ${zalando.variable} font-sans antialiased`}>
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <DiscountPopup />
          </CartProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
