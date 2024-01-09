import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div className="w-[500px] m-auto my-[300px] text-center">
        <p className="text-[48px] font-semibold">Home page</p>
        <div className="flex flex-col">
          <Link href="/blog" className="mt-6 text-[24px] font-medium underline">
            Go to Blog List
          </Link>
          <Link
            href="/todo-list"
            className="mt-6 text-[24px] font-medium underline"
          >
            Go to TODO List
          </Link>
        </div>
      </div>
    </div>
  )
}
