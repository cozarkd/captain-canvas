// src/components/Navbar.tsx
"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import useScrollToSection from '@/hooks/useScrollToSection';


const Navbar: React.FC = () => {
    const handleScrollToSection = useScrollToSection();

  return (
    <nav className="w-full sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-8 py-4">
        <div className="logo pt-1">
          <Image src="/logo.svg" alt="Logo" width={180} height={31} />
        </div>
        <div className="flex items-center space-x-8">
            <a onClick={() => handleScrollToSection('pricing')}>Precios</a>
            <a onClick={() => handleScrollToSection('download')}>Descargar</a>
            <a onClick={() => handleScrollToSection('contacto')}>Contacto</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
