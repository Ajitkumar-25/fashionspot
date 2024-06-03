import { NextResponse } from "next/server";
import order from "@/models/order";
import connectDB from "@/middleware/mongooseconnection";

export async function POST(request) {
  await connectDB();

  try {
    const {email} = await request.json();

    let orders = await order.find({ email });
    return NextResponse.json(orders);
  } catch (err) {
    return NextResponse.json({ error: "Error" }, { status: 400 });
  }
}
