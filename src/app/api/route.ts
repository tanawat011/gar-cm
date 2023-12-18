export async function GET() {
  return new Response('Hello world! GET', { status: 200 })
}

export async function POST() {
  return new Response('Hello world! POST', { status: 200 })
}
