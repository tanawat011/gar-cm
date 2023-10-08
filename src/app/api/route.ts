export async function GET(request: Request) {
  return new Response('Hello world! GET', { status: 200 })
}

export async function POST(request: Request) {
  return new Response('Hello world! POST', { status: 200 })
}
