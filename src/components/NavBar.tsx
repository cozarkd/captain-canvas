// src/components/Navbar.tsx
'use client'

import React from 'react'
import Image from 'next/image'
import Logo from '@/components/Logo'
import useScrollToSection from '@/hooks/useScrollToSection'
import LocaleSwitcher from '@/components/locale-switcher'
import { Button } from '@/components/ui/button'

type NavBarProps = {
  dictionary: {
    [key: string]: string;
  };
};

export default function Navbar({dictionary}: NavBarProps) {

  const navbar = {
    "pricing": dictionary.pricing,
    "download": dictionary.download,
    "contact": dictionary.contact,
    "language": dictionary.language,
  }

  const handleScrollToSection = useScrollToSection()


  return (
    <nav className='w-full fixed top-0 z-50 bg-foreground shadow-md'>
      <div className='container mx-auto flex items-center justify-between px-8 py-4'>
        
        <div className='logo pt-1 text-primary w-48'>
          <Logo />
        </div>
        <div className='flex items-center space-x-2'>
          <Button variant='link' onClick={() => handleScrollToSection('pricing')}>
            {navbar.pricing}
          </Button>
          <Button variant='link' onClick={() => handleScrollToSection('download')}>
            {navbar.download}
          </Button>
          <Button variant='link' onClick={() => handleScrollToSection('contact')}>
            {navbar.contact}
          </Button>

          <LocaleSwitcher language={navbar.language} />
        </div>
      </div>
    </nav>
  )
}

