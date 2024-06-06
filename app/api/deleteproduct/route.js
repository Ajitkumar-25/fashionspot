import { NextResponse } from "next/server";
import Product from "@/models/product";
import connectDB from "@/middleware/mongooseconnection";

export async function DELETE(req) {
  await connectDB();

  try {
    const { productId } = await req.json();
    console.log("Product ID:", productId);

    if (!productId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    let product = await Product.findById(productId);
    console.log("Found product:", product);

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    await product.deleteOne();

    return NextResponse.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete product", details: error.message },
      { status: 500 }
    );
  }
}
