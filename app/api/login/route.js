import { NextResponse } from "next/server";
import User from "@/models/user";
import connectDB from "@/middleware/mongooseconnection";
const bcrypt = require("bcrypt");

export async function POST(req) {
  await connectDB();

  try {
    const { email, password } = await req.json();// Correctly parse the JSON body from the request
    console.log(email, password);
    if (!email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to login", details: error.message },
      { status: 500 }
    );
  }
}
