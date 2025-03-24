import { dramas } from "./db";

export  async function GET(){
    return  Response.json(dramas)
}

export async function POST(req:Request){
    const drama = await req.json();
    // console.log('..........',drama);
    const newDrama={...drama}
    dramas.push(newDrama)
    return new Response(JSON.stringify(newDrama))
}