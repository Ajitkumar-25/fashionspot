import { NextResponse} from "next/server";
import User from "@/models/user";
import connectDB from "@/middleware/mongooseconnection";
const bcrypt = require('bcrypt');


export async function POST(req) {
    await connectDB();
  
    try {
      const { name, email, password, mobile } = await req.json(); // Correctly parse the JSON body from the request
  
      if (!name || !email || !password || !mobile) {
        return NextResponse.json(
          { error: 'Missing required fields' },
          { status: 400 }
        );
      }
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return NextResponse.json(
          { error: 'Email is already in use' },
          { status: 400 }
        );
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      let newUser = new User({
        name,
        email,
        password: hashedPassword,
        mobile,
      });
  
      await newUser.save();
  
      return NextResponse.json(newUser);
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: 'Failed to create user', details: error.message },
        { status: 500 }
      );
    }
  }

