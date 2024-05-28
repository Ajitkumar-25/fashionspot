import { NextResponse} from "next/server";
import product from "@/models/product";
import connectDB from "@/middleware/mongooseconnection";


export async function GET(request, { params }) {
    await connectDB();
    const { category } = params;
    const validCategories = ["tshirt", "mugs", "hoodies", "stickers"];
    
    if (!validCategories.includes(category)) {
      return NextResponse.json({ error: "Invalid category" }, { status: 400 });
    }
  
    let products = await product.find({ category });
    return NextResponse.json(products);
  }


