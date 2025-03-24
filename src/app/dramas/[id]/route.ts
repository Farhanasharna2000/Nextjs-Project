import { error } from "console";
import { dramas } from "../db";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const drama = dramas.find((d) => d.id === id);
  return drama
    ? new Response(JSON.stringify(drama))
    : new Response("Drama not found", { status: 404 });
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  // check if movie exist
  const drama = dramas.find((d) => d.id === id);
  if (!drama) {
    return new Response(JSON.stringify({ error: "Drama Not Found:(" }), {
      status: 404,
    });
  }
  try {
    const updatedDrama = await req.json();
    //find index of drama
    const index = dramas.findIndex((d) => d.id === id);
    if (!drama) {
      return new Response(JSON.stringify({ error: "Drama Not Found:(" }), {
        status: 404,
      });
    }
    //update drama
    dramas[index] = { ...drama, ...updatedDrama };
    return new Response(JSON.stringify(dramas[index]), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to parse JSON" }), {
      status: 404,
    });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  //find drama index
  const index = dramas.findIndex((d) => d.id === id);
  if (index === -1) {
    return new Response(JSON.stringify({ error: "Drama not found" }), {
      status: 404,
    });
  }
  dramas.splice(index, 1);
  return new Response(
    JSON.stringify({ message: "movie deleted successfully" }),
    { status: 200 }
  );
}
