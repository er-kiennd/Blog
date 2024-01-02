'use client'

import React from 'react'
import { useEffect } from 'react'

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="w-[60%] m-auto mt-[100px] text-center">
      <p className="text-[32px]">404</p>
      <p className="text-[24px] mb-[16px]">Page not found</p>
      <button className="bg-[#456452] font-semibold text-white py-[12px] px-[32px] rounded-[5px]" onClick={() => reset()}>Try again</button>
    </div>
  )
}
