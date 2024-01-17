import React from 'react'
import PostDetail from '@/app/[lang]/components/PostDetail'

export default async function BlogDetail({ params }: { params: { id: string }}) {
  const urlApi = process.env.NEXT_APP_URL_API
  const res = await fetch(`${urlApi}/api/blogid?id=${params.id}`)
  const blogDetail = await res.json()

  return (
    <div className="w-[50%] m-auto mt-[100px]">
      <PostDetail postDetail={blogDetail} />
    </div>
  )
}
