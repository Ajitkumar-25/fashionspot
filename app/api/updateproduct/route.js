import { NextResponse } from "next/server";
import Product from "@/models/product"
import connectDB from "@/middleware/mongooseconnection";


export async function PUT(req) {
    await connectDB();
  
    try {
      const {
        _id,
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
  
      if (!_id) {
        return NextResponse.json(
          { error: "Product ID is required" },
          { status: 400 }
        );
      }
  
      // Find the product by ID and update it
      const updatedProduct = await Product.findByIdAndUpdate(
        _id,
        { title, slug, description, image, category, size, color, price, availableQty },
        { new: true, runValidators: true } // Return the updated document and run validation
      );
  
      if (!updatedProduct) {
        return NextResponse.json(
          { error: "Product not found" },
          { status: 404 }
        );
      }
  
      return NextResponse.json(updatedProduct);
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Failed to update product", details: error.message },
        { status: 500 }
      );
    }
  }