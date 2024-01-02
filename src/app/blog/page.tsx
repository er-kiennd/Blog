import React from 'react'
import Post from '@/components/Post'

interface Blog {
  id: number
  title: string
  body: string
}

export default async function Blog() {

  const res = await fetch(
    `http://localhost:3000/api/blog?limit=10&skip=0`
  )
  const { posts } = await res.json()

  return (
    <div>
      <Post post={posts} />
    </div>
  )
}
