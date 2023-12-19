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
    <section className='flex column lg:flex-row items-center h-screen-mobile relative w-full bg-background pt-[60px]'>

      <div className='container mx-auto flex flex-col-reverse gap-4 md:flex-row items-center'>
        <div className='flex flex-col justify-stretch items-stretch w-full md:w-1/2'>

          <div className='mb-4 sm:mb-4'>
            <h1 className='text-2xl mb-2 sm:mb-4 leading-tight md:text-4xl md:leading-tight font-bold text-secondary'>{dictionary.h1}</h1>
            <p className='mt-2 max-w-2xl text-l md:text-lg'>{dictionary.description}</p>
          </div>

          <div className='flex flex-col md:flex-row gap-2 md:gap-4'>
            <Button className='border-secondary md:px-12' variant='accent' onClick={() => handleScrollToSection('pricing')}>
              {dictionary.btnPricing}
            </Button>
            <Button className='' variant='ghost' onClick={() => handleScrollToSection('download')}>
              {dictionary.btnDownload}
            </Button>
          </div>
        </div>
        <div className='flex justify-center drop-shadow-2xl w-3/4 md:w-1/2 '>
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
