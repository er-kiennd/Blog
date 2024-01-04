import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="flex justify-between w-[1312px] m-auto py-[32px]">
      <Link href="/" className="text-[32px] font-semibold">
        Home
      </Link>
      <div className="flex justify-between gap-8">
        <Link href="/" className="text-[20px] font-semibold underline">
          About us
        </Link>
        <Link href="/" className="text-[20px] font-semibold underline">
          News
        </Link>
        <Link href="/" className="text-[20px] font-semibold underline">
          Service
        </Link>
        <Link href="/" className="text-[20px] font-semibold underline">
          Contact
        </Link>
      </div>
    </div>
  )
}
