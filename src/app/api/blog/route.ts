export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const limit = searchParams.get('limit')
  const skip = searchParams.get('skip')

  const res = await fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`)

  if(!res.ok) {
    throw new Error('faild to fetch post')
  }

  const data = await res.json()
  
  return Response.json(data)  
}