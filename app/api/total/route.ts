import { NextResponse } from "next/server";
import { getTotalRaised } from "@/lib/donations";

export async function GET() {
  const total = getTotalRaised();
  return NextResponse.json({ total });
}
