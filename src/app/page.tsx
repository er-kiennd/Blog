import Link from 'next/link'

export default function Home() {

  return (
    <div>
      <div className="w-[500px] m-auto mt-[100px] text-center">
        <p className="mb-6 text-[48px] font-semibold">Home page</p>
        <Link href="/blog" className="text-[24px] font-medium underline">
          Go to Blog List
        </Link>
      </div>
    </div>
  )
}
