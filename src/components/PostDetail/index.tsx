import React from 'react'
import Link from 'next/link'

interface PostDetail {
  title?: string,
  body?: string,
  tags: string[] 
}

export default function PostDetail({ postDetail } : { postDetail: PostDetail }) {

  return (
    <>
      <div className="flex justify-between">
        <Link href="/" className="text-[32px] font-semibold">
          Home
        </Link>
        <Link className="text-[32px] font-semibold" href="/blog">Back</Link>
      </div>

      <p className="mt-[70px] text-[32px] font-semibold">{postDetail?.title}</p>
      <div className="flex gap-12 my-[24px]">
        {postDetail?.tags?.map((tag: string, index: number) => (
          <p key={index} className="uppercase">
            {tag}
          </p>
        ))}
      </div>
      <hr />
      <p className="my-[24px]">{postDetail?.body}</p>
    </>
  )
}