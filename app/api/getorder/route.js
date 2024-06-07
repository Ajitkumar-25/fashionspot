import { NextResponse } from "next/server";
import order from "@/models/order";
import connectDB from "@/middleware/mongooseconnection";

export async function POST(request) {
  await connectDB();
  try {
    const { orderId } = await request.json();
    let orders = await order.findOne({ orderId }); // findOne instead of find to get a single order object
    if (!orders) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }
    return NextResponse.json(orders);
  } catch (err) {
    return NextResponse.json({ error: "Error fetching order" }, { status: 400 });
  }
}
