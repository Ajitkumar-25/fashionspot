import { NextResponse } from "next/server";

export async function POST(request) {
  const { pincode } = await request.json();
  const serviceablePincodes = [201309, 208007, 210502];

  if (serviceablePincodes.includes(Number(pincode))) {
    return NextResponse.json({
      success: true,
      serviceable: true,
      message: "Pincode is serviceable",
    });
  } else {
    return NextResponse.json({
      success: false,
      serviceable: false,
      message: "Pincode is not serviceable",
    });
  }
}
