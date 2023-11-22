// src/components/DownloadSection.tsx

import React from 'react'

import { Button } from '@/components/ui/button'

const DownloadSection = () => {
  return (
    <section id='download' className='py-12 w-full bg-white'>
      <div className='container mx-auto px-4 text-center'>
        <h2 className='text-3xl font-bold mb-6'>Descarga la Aplicación</h2>
        <p className='mb-4'>Obtén la última versión de nuestra aplicación para escritorio.</p>
        <Button variant='default'>Descargar Ahora</Button>
      </div>
    </section>
  )
}

export default DownloadSection
