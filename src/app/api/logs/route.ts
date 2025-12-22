import { NextResponse } from "next/server";
import { ConnectDB } from "@/lib/mongodb";
import { DevLog } from "@/models/DevLogs";

export async function GET() {
  await ConnectDB();

  // return NextResponse.json(
  //     {message: "Log api is working"},
  // )
  const logs = await DevLog.find().sort({ createdAt: -1 });

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
