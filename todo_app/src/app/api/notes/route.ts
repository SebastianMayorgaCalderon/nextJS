import { getNotes } from "./utils"

export const dynamic = 'force-dynamic' // defaults to force-static
export async function GET() {
  const data = await getNotes()
  return Response.json({ data })
}