'use client';

import React, { useState } from 'react';
import Logo from '@/components/Logo';
import useScrollToSection from '@/hooks/useScrollToSection';
import LocaleSwitcher from '@/components/locale-switcher';
import { Button } from '@/components/ui/button';

type NavBarProps = {
  dictionary: {
    [key: string]: string;
  };
};

export default function Navbar({ dictionary }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbar = {
    "pricing": dictionary.pricing,
    "download": dictionary.download,
    "contact": dictionary.contact,
    "language": dictionary.language,
  };

  const handleScrollToSection = useScrollToSection();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='w-full fixed top-0 z-50 bg-foreground shadow-md'>
      <div className='container relative mx-auto flex items-center justify-between py-4'>
        
        <div className='logo pt-1 text-primary w-48'>
          <Logo />
        </div>

        <div className='md:hidden' onClick={toggleMenu}>
          <button className="text-primary">
            {/* Aquí puedes añadir un ícono de menú burger */}
            Menu
          </button>
        </div>

        <div className={`absolute top-[60px] right-0 flex flex-col items-center bg-secondary p-4 text-primary text-2xl space-x-2 ${isMenuOpen ? 'flex' : 'hidden'} md:relative md:flex md:flex-row md:top-auto`}>
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
  );
}
