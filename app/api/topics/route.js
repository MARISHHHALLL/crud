import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { title, description } = await req.json();
  await connectMongoDB();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "topic created", status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    console.log(id);
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({ message: "topic deleted" });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
