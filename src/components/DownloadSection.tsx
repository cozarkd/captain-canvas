// src/components/DownloadSection.tsx

import React from 'react'

import { Button } from '@/components/ui/button'
import { HardDriveDownload } from 'lucide-react'
import { title } from 'process';


type DownloadSectionProps = {
  dictionary: {
    [key: string]: string;
  };
};

export default function DownloadSection({ dictionary }: DownloadSectionProps) {
  const download = {
    title: dictionary.title,
    description: dictionary.description,
    description2: dictionary.description2,
    windows: dictionary.windows,
    mac: dictionary.mac,
  };

  return (
    <section id='download' className='w-full py-12 bg-primary'>
      <div className='container flex flex-col items-center text-center'>
        <h2 className='text-3xl font-bold mb-6'>{download.title}</h2>
        <p className='mb-4'>{download.description}</p>
        <p className='mb-4'>{download.description2}</p>
        <div className='flex gap-2 mt-4'>
          <Button className='text-accent px-12' variant='secondary'>
            <HardDriveDownload className="mr-2"/>{download.windows}
          </Button>
          <Button className='text-accent px-12' variant='secondary'>
            <HardDriveDownload className="mr-2"/>{download.mac}
          </Button>      
        </div>
      </div>
    </section>
  )
}

