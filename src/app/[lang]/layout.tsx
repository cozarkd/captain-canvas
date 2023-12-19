import { i18n } from '@/i18n-config'

import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'


import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Captain Canvas es tu maquetador automático',
//   description:
//     'Ahora tiempo y espacio en tus lienzos de impresión organizando todos tus elementos de forma óptima.',
// }

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang)

  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
  }
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
