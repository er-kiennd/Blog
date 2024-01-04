'use client'

import React from 'react'
import Link from 'next/link'

interface Post {
  id: number
  title: string
  body: string
}

interface Blog {
  id: number
  title: string
  body: string
}

export default function Post({ post }: { post: Blog[] }) {
  const [listBlog, setListBlog] = React.useState<Blog[]>([])
  const [skip, setSkip] = React.useState(10)
  const [totalBlog, setTotalBlog] = React.useState<number>()

  const getData = async () => {
    const res = await fetch(
      `http://localhost:3000/api/blog?limit=10&skip=${skip}`
    )
    const data = await res.json()
    setTotalBlog(data.total)
    return data.posts
  }

  const fetchData = async () => {
    const res = await getData()

    setListBlog([...listBlog, ...res])
  }

  const loadMore = () => {
    setSkip(skip + 10)
    fetchData()
  }

  React.useEffect(() => {
    setListBlog(post)
  }, [])

  return (
    <>
      <div className="w-[50%] m-auto mt-[100px]">
        <div className="mt-[50px]">
          {listBlog?.map((item: Blog) => (
            <div key={item.id} className="mb-[100px]">
              <Link href={`/blog/${item.id}`} className="mb-[42px] underline">
                <p className="text-[32px] list-disc">{item.title}</p>
              </Link>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
        {listBlog.length === totalBlog ? (
          ''
        ) : (
          <div className="flex justify-center mb-[100px]">
            <button
              className="px-[42px] py-[10px] bg-[#435457] text-white font-semibold"
              onClick={loadMore}
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </>
  )
}
