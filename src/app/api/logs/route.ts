import { NextResponse } from "next/server";
import { ConnectDB } from "@/lib/mongodb";
import { DevLog } from "@/models/DevLogs";

export async function GET(req: Request) {
  await ConnectDB();

  const {searchParams}= new URL(req.url);
  const q = searchParams.get("q");
  const mood = searchParams.get("mood");

  const query: any = {};

  if (q){
    query.$or = [
      {title: {$regex: q, $options: "i"}},
      {content: {$regex: q, $options: "i"}},
    ];
  };

  if (mood){
    query.mood = mood;
  }
  // return NextResponse.json(
  //     {message: "Log api is working"},
  // )
  const logs = await DevLog.find(query).sort({ createdAt: -1 });
  return NextResponse.json(logs);
}
export async function POST(req: Request) {
  await ConnectDB();

  const body = await req.json();

  const log = await DevLog.create({
    title: body.title,
    content: body.content,
    mood: body.mood,
  });
  return NextResponse.json(log, { status: 201 });
}
export async function DELETE(req: Request){
  await ConnectDB();

  const {id} = await req.json();

  await DevLog.findByIdAndDelete(id);

  return NextResponse.json({success: true});
}