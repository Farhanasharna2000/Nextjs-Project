import { NextRequest } from "next/server";
import { dramas } from "./db";

export async function POST(req: Request) {
  const drama = await req.json();
  // console.log('..........',drama);
  const newDrama = { ...drama };
  dramas.push(newDrama);
  return new Response(JSON.stringify(newDrama));
}
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredDramas = query
    ? dramas.filter((d) => d.title.toLowerCase().includes(query))
    : dramas;
  return new Response(JSON.stringify(filteredDramas));
}
