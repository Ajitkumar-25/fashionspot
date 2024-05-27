import { NextResponse } from "next/server";
import Product from "@/models/product"
import connectDB from "@/middleware/mongooseconnection";

export async function POST(req) {
  await connectDB();

  try {
    const {
      title,
      slug,
      description,
      image,
      category,
      size,
      color,
      price,
      availableQty,
    } = await req.json(); // Correctly parse the JSON body from the request

    if (!title || !slug || !description || !image || !category || !price || !availableQty) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    let newProduct = new Product({
      title,
      slug,
      description,
      image,
      category,
      size,
      color,
      price,
      availableQty,
    });

    await newProduct.save();

    return NextResponse.json(newProduct);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create product", details: error.message },
      { status: 500 }
    );
  }
}
