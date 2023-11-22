'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'

import { i18n } from '@/i18n-config'

export default function LocaleSwitcher() {
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
          <button className=''>Idioma</button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='min-w-[4rem]'>
          {i18n.locales.map((locale) => (
            <DropdownMenuItem key={locale} className='flex items-center justify-center text-center'>
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
