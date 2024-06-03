import { NextResponse } from "next/server";

const pincodeData = {
  110001: { city: "New Delhi", state: "Delhi" },
  400001: { city: "Mumbai", state: "Maharashtra" },
  560001: { city: "Bangalore", state: "Karnataka" },
  600001: { city: "Chennai", state: "Tamil Nadu" },
  208007: { city: "Kanpur", state: "Uttar Pradesh" },
  // Add more sample pincodes and their corresponding city and state here
};

export async function POST(request) {
  const { pincode } = await request.json();

  const location = pincodeData[pincode];

  if (location) {
    return NextResponse.json({
      success: true,
      location,
    });
  } else {
    return NextResponse.json({
      success: false,
      message: "City and state not found for the given pincode",
    });
  }
}
