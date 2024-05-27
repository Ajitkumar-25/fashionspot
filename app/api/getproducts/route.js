import { NextResponse} from "next/server";
import product from "@/models/product";
import connectDB from "@/middleware/mongooseconnection";


export async function GET(request) {
    await connectDB();
    let products = await product.find();
    return NextResponse.json(products);
    }


