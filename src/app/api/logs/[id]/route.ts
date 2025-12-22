import { ConnectDB } from "@/lib/mongodb";
import { DevLog } from "@/models/DevLogs";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await ConnectDB();
  const { id } = await params;
  const log = await DevLog.findById(id);
  return NextResponse.json(log);
}
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await ConnectDB();
  const { id } = await params;
  const body = await req.json();

  const updated = await DevLog.findByIdAndUpdate(
    id,
    {
      title: body.title,
      content: body.content,
      mood: body.mood,
    },
    { new: true }
  );
  return NextResponse.json(updated);
}
