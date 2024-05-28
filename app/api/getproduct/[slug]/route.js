import { NextResponse } from "next/server";
import Product from "@/models/product";
import connectDB from "@/middleware/mongooseconnection";

export async function GET(request, { params }) {
  await connectDB();
  const { slug } = params;
  let product = await Product.findOne({ slug });
  return NextResponse.json(product);
}
