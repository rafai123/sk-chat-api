import { NextResponse } from "next/server";
import { prisma } from "~/utils/prisma";

// Create chat room
export async function POST(request: Request) {
  const res = await request.json();

  if (!res.userId || !res.doctorId) {
    return NextResponse.json({ error: "Missing userId or doctorId" });
  }

  const newRoom = await prisma.room.create({
    data: {
      userId: String(res.userId),
      doctorId: String(res.doctorId),
    },
  });

  return NextResponse.json(newRoom);
}
