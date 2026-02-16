import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'

import './globals.css'

const _manrope = Manrope({ subsets: ['latin', 'greek'], variable: '--font-manrope' })

export const metadata: Metadata = {
  metadataBase: new URL('https://michalopoulos.gr'),
  title: 'ΜΙΧΑΛΟΠΟΥΛΟΣ Ι.Κ.Ε. - Μηχανουργείο στην Καλαμάτα Μεσσηνίας',
  description:
    'Μηχανουργείο με 40 χρόνια εμπειρίας στην Καλαμάτα Μεσσηνίας. Κατασκευή σωλήνων πιέσεως, μπουκάλων ανυψωτικών μηχανημάτων, ανταλλακτικά & επισκευές αγροτικών μηχανημάτων. Μιχαλόπουλος Ι.Κ.Ε.',
  keywords:
    'μηχανουργείο Καλαμάτα, μηχανουργείο Μεσσηνία, Μιχαλόπουλος Καλαμάτα, σωλήνες πιέσεως, ανυψωτικά μηχανήματα, ανταλλακτικά μηχανημάτων, αγροτικά μηχανήματα, μηχανήματα έργων, ρουλεμάν, φίλτρα, τσιμούχες, υδραυλικά, μηχανουργείο Πελοπόννησο',
  openGraph: {
    title: 'ΜΙΧΑΛΟΠΟΥΛΟΣ Ι.Κ.Ε. - Μηχανουργείο Καλαμάτα',
    description:
      'Μηχανουργείο με 40 χρόνια εμπειρίας στην Καλαμάτα Μεσσηνίας. Κατασκευή σωλήνων πιέσεως, ανταλλακτικά & επισκευές μηχανημάτων.',
    locale: 'el_GR',
    type: 'website',
    siteName: 'ΜΙΧΑΛΟΠΟΥΛΟΣ Ι.Κ.Ε.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ΜΙΧΑΛΟΠΟΥΛΟΣ Ι.Κ.Ε. - Μηχανουργείο Καλαμάτα',
    description:
      'Μηχανουργείο με 40 χρόνια εμπειρίας στην Καλαμάτα Μεσσηνίας.',
  },
  alternates: {
    canonical: 'https://michalopoulos.gr',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#1e3a5f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="el">
      <body className={`${_manrope.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
