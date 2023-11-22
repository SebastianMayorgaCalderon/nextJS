import { getNoteById } from "../utils"

export const dynamic = 'force-dynamic' // defaults to force-static
export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { searchParams } = new URL(request.url)
  const { id } = params
  const data = await getNoteById(id);
  return Response.json({ data })
}