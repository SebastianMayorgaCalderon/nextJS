import { createNote, getNotes } from "./utils"

export const dynamic = 'force-dynamic' // defaults to force-static
export async function GET() {
  const data = await getNotes()
  return Response.json({ data })
}

export const POST = async (request: Request) => {
  const res = await request.json()
  const result = await createNote(res)
  return Response.json({ result })
}