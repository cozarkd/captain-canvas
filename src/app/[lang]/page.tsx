// src/app/page.tsx

import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'

import NavBar from '@/components/NavBar'
import FeaturesSection from '@/components/FeaturesSection'
import PricingSection from '@/components/PricingSection'
import DownloadSection from '@/components/DownloadSection'
import HeroSection from '@/components/HeroSection'
import ContactForm from '@/components/ContactForm'

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang)
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>

      <NavBar dictionary={dictionary.NavBar} />
      <HeroSection dictionary={dictionary.hero} />
      <FeaturesSection dictionary={dictionary.features} />
      <PricingSection dictionary={dictionary.pricing} />
      <DownloadSection dictionary={dictionary.download} />
      <ContactForm dictionary={dictionary.contact} />
      
    </main>
  )
}
