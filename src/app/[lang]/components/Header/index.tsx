'use client'

import React from 'react'
import Link from 'next/link'
import { type getDictionary } from '../../../../../get-dictionary'
import { i18n, type Locale } from '../../../../../i18n-config'
import { usePathname, useRouter } from 'next/navigation'

export default function Header({
  dictionary,
  params
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['home-page'],
  params: string
}) {
  const pathName = usePathname()
  const router = useRouter()

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return router.replace(segments.join('/'))
  }

  return (
    <div className="flex justify-between w-[1312px] m-auto py-[32px]">
      <Link href={`/${params}`} className="text-[32px] font-semibold">
        {dictionary.home}
      </Link>
      <div className="flex justify-between items-center gap-8">
        <Link href={`/${params}`} className="text-[20px] font-semibold underline">
          {dictionary.about_us}
        </Link>
        <Link href={`/${params}`} className="text-[20px] font-semibold underline">
          {dictionary.news}
        </Link>
        <Link href={`/${params}`} className="text-[20px] font-semibold underline">
          {dictionary.service}
        </Link>
        <Link href={`/${params}`} className="text-[20px] font-semibold underline">
          {dictionary.contact}
        </Link>
        {i18n.locales.map((lang, index) => (
          <button key={index} onClick={() => redirectedPathName(lang)}>
            {lang.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  )
}
