// src/components/HeroSection.tsx
'use client'

import React from 'react'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import useScrollToSection from '@/hooks/useScrollToSection'

export default function HeroSection({
  dictionary,
}: {
  dictionary: {
    h1: string
    description: string
    btnPricing: string
    btnDownload: string
  }
}) {
  const handleScrollToSection = useScrollToSection()

  return (
    <section className='flex column lg:flex-row items-center h-screen-mobile relative w-full bg-background'>

      <div className='container mx-auto flex flex-col-reverse md:flex-row items-center mt-[60px]'>
        <div className='flex flex-col pb-10 w-full md:w-1/2'>

          <div className='mb-4'>
            <h1 className='text-3xl md:text-5xl font-bold text-secondary'>{dictionary.h1}</h1>
            <p className='mx-auto mt-2 max-w-2xl text-l md:text-lg'>{dictionary.description}</p>
          </div>

          <div className='flex flex-col md:flex-row gap-2 md:gap-4'>
            <Button className='text-accent border-2 border-accent' variant='outline' onClick={() => handleScrollToSection('pricing')}>
              {dictionary.btnPricing}
            </Button>
            <Button className='' variant='ghost' onClick={() => handleScrollToSection('download')}>
              {dictionary.btnDownload}
            </Button>
          </div>
        </div>
        <div className='flex justify-center drop-shadow-2xl w-2/3 md:w-1/2 '>
          <Image
              src='/logo_icon.png'
              alt='Logo'
              width={500}
              height={500}
              className='mb-4 drop-shadow-2xl'
            />
        </div>
      </div>
    </section>
  )
}
