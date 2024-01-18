import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  const res = await fetch(`https://dummyjson.com/posts/${id}`)

  const data = await res.json()

  if (res.status === 200) {
    return NextResponse.json(data);
  } else {
    return new NextResponse("Error", {
      status: 404,
      statusText: "Not found",
    });
  }
}