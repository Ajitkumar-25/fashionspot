import { NextResponse } from "next/server";
import Order from "@/models/order";
import connectDB from "@/middleware/mongooseconnection";
import mongoose from "mongoose";

export async function POST(request) {
  await connectDB();
  try {
    const { email, products, address, amount, status, city, state, pincode } =
      await request.json();
    const orderId = new mongoose.Types.ObjectId().toString();

    const newOrder = new Order({
      email,
      orderId,
      products,
      address,
      amount,
      status,
    });

    await newOrder.save();
    return NextResponse.json(newOrder);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create order", details: error.message },
      { status: 500 }
    );
  }
}
