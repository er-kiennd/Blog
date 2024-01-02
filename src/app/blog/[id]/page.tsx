import React from 'react'
import PostDetail from '@/components/PostDetail'

interface BlogDetail {
  title?: string,
  body?: string,
  tags: string[] 
}

export default async function BlogDetail({ params }: { params: { id: string }}) {
  const res = await fetch(`http://localhost:3000/api/blogid?id=${params.id}`)
  const blogDetail = await res.json()

  return (
    <div className="w-[50%] m-auto mt-[100px]">
      <PostDetail postDetail={blogDetail} />
    </div>
  )
}
