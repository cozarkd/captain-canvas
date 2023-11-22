// src/components/HeroSection.tsx
'use client'

import React from 'react'
import { getDictionary } from '@/get-dictionary'

import { Locale } from '@/i18n-config'

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
    <section className='h-screen relative w-full'>
      <div className='absolute w-full h-full -z-10'>
        <svg viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'>
          <defs>
            <radialGradient id='Gradient1' cx='50%' cy='50%' fx='0.441602%' fy='50%' r='.5'>
              <animate
                attributeName='fx'
                dur='34s'
                values='0%;3%;0%'
                repeatCount='indefinite'
              ></animate>
              <stop offset='0%' stopColor='rgba(0, 0, 255, 1)'></stop>
              <stop offset='100%' stopColor='rgba(0, 0, 255, 0)'></stop>
            </radialGradient>
            <radialGradient id='Gradient2' cx='50%' cy='50%' fx='2.68147%' fy='50%' r='.5'>
              <animate
                attributeName='fx'
                dur='23.5s'
                values='0%;3%;0%'
                repeatCount='indefinite'
              ></animate>
              <stop offset='0%' stopColor='rgba(255, 215, 0, 1)'></stop>
              <stop offset='100%' stopColor='rgba(255, 215, 0, 0)'></stop>
            </radialGradient>
            <radialGradient id='Gradient3' cx='50%' cy='50%' fx='0.836536%' fy='50%' r='.5'>
              <animate
                attributeName='fx'
                dur='21.5s'
                values='0%;3%;0%'
                repeatCount='indefinite'
              ></animate>
              <stop offset='0%' stopColor='rgba(255, 255, 255, 1)'></stop>
              <stop offset='100%' stopColor='rgba(255, 255, 255, 0)'></stop>
            </radialGradient>
          </defs>

          <rect
            x='13.744%'
            y='1.18473%'
            width='100%'
            height='100%'
            fill='url(#Gradient1)'
            transform='rotate(334.41 50 50)'
          >
            <animate
              attributeName='x'
              dur='20s'
              values='25%;0%;25%'
              repeatCount='indefinite'
            ></animate>
            <animate
              attributeName='y'
              dur='21s'
              values='0%;25%;0%'
              repeatCount='indefinite'
            ></animate>
            <animateTransform
              attributeName='transform'
              type='rotate'
              from='0 50 50'
              to='360 50 50'
              dur='7s'
              repeatCount='indefinite'
            ></animateTransform>
          </rect>
          <rect
            x='-2.17916%'
            y='35.4267%'
            width='100%'
            height='100%'
            fill='url(#Gradient2)'
            transform='rotate(255.072 50 50)'
          >
            <animate
              attributeName='x'
              dur='23s'
              values='-25%;0%;-25%'
              repeatCount='indefinite'
            ></animate>
            <animate
              attributeName='y'
              dur='24s'
              values='0%;50%;0%'
              repeatCount='indefinite'
            ></animate>
            <animateTransform
              attributeName='transform'
              type='rotate'
              from='0 50 50'
              to='360 50 50'
              dur='12s'
              repeatCount='indefinite'
            ></animateTransform>
          </rect>
          <rect
            x='9.00483%'
            y='14.5733%'
            width='100%'
            height='100%'
            fill='url(#Gradient3)'
            transform='rotate(139.903 50 50)'
          >
            <animate
              attributeName='x'
              dur='25s'
              values='0%;25%;0%'
              repeatCount='indefinite'
            ></animate>
            <animate
              attributeName='y'
              dur='12s'
              values='0%;25%;0%'
              repeatCount='indefinite'
            ></animate>
            <animateTransform
              attributeName='transform'
              type='rotate'
              from='360 50 50'
              to='0 50 50'
              dur='9s'
              repeatCount='indefinite'
            ></animateTransform>
          </rect>
        </svg>
      </div>
      <div className='flex flex-col items-center justify-center text-center pb-10 h-full'>
        <Image
          src='/logo_icon.png'
          alt='Logo'
          width={400}
          height={100}
          className='mb-4 drop-shadow-lg'
        />

        <div className='mb-4'>
          <h1 className='text-4xl font-bold'>{dictionary.h1}</h1>
          <p className='mx-auto mt-2 max-w-2xl text-lg'>{dictionary.description}</p>
        </div>

        <div className='flex gap-4'>
          <Button variant='default' onClick={() => handleScrollToSection('pricing')}>
            {dictionary.btnPricing}
          </Button>
          <Button variant='secondary' onClick={() => handleScrollToSection('download')}>
            {dictionary.btnDownload}
          </Button>
        </div>
      </div>
    </section>
  )
}
