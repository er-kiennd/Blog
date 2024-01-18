import React from 'react'
import Post from '../../../components/Post'

export default async function Blog() {
  const urlApi = process.env.NEXT_APP_URL_API
  const res = await fetch(
    `${urlApi}/api/blog?limit=10&skip=0`
  )
  const { posts } = await res.json()

  return (
    <div>
      <Post post={posts} />
    </div>
  )
}
