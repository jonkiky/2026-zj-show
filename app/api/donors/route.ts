import { NextResponse } from "next/server";
import { getAllDonations } from "@/lib/donations";

export async function GET() {
  const donors = getAllDonations();
  return NextResponse.json({ donors });
}
