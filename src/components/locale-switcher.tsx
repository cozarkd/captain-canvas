'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'

import { Button } from '@/components/ui/button';


import { i18n } from '@/i18n-config'

type LocaleSwitcherProps = {
  language: string;
};

export default function LocaleSwitcher({ language }: LocaleSwitcherProps) {
  const pathName = usePathname()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className='relative'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='link'>
          {language}
          </Button>
          {/* <button className='text-sm md:text-m'>{language}</button> */}
        </DropdownMenuTrigger>
        <DropdownMenuContent className='mt-1 min-w-[4rem] bg-secondary text-sm border-accent border-2 rounded-lg'>
          {i18n.locales.map((locale) => (
            <DropdownMenuItem key={locale} className='flex items-center justify-center text-center text-primary'>
              <Link href={redirectedPathName(locale)}>
                <span className='cursor-pointer'>{locale.toUpperCase()}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
