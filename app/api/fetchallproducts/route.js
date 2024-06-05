import { NextResponse } from "next/server";
import product from "@/models/product";
import connectDB from "@/middleware/mongooseconnection";

export async function GET() {
  await connectDB();
  try {
    let products = await product.find();
    return NextResponse.json(products);
  } catch (err) {
    return NextResponse.json(
      { error: "Error fetching products" },
      { status: 500 }
    );
  }
}
