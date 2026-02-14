import { NextResponse } from "next/server";
import { addDonation } from "@/lib/donations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { donorName, amount, anonymous } = body;

    // Validation
    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: "Amount must be greater than 0" },
        { status: 400 }
      );
    }

    if (!anonymous && (!donorName || donorName.trim() === "")) {
      return NextResponse.json(
        { error: "Donor name is required unless anonymous" },
        { status: 400 }
      );
    }

    const donation = addDonation(
      donorName || "Anonymous",
      parseFloat(amount),
      anonymous || false
    );

    return NextResponse.json({ success: true, donation }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add donation" },
      { status: 500 }
    );
  }
}
