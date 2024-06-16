import { NextResponse } from "next/server";
import User from "@/models/user";
import connectDB from "@/middleware/mongooseconnection";
const bcrypt = require("bcrypt");
import nodemailer from "nodemailer";

export async function POST(req) {
  await connectDB();

  try {
    const { name, email, password, mobile } = await req.json(); // Correctly parse the JSON body from the request

    if (!name || !email || !password || !mobile) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email is already in use" },
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

    // Send email to user
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to Fashion Spot!",
      html: `
          <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
            <h1 style="color: #4CAF50;">Welcome to Fashion Spot!</h1>
            <p>Hi ${name},</p>
            <p>Thank you for signing up at Fashion Spot. Here are your account details:</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Password:</strong> ${password}</p>
            <p style="font-size: 0.9em; color: #777; margin-top: 20px;">
              Please keep this information safe and do not share it with anyone.
            </p>
            <p>We look forward to seeing you soon. Visit our website to start shopping now!</p>
            <div style="text-align: center; margin-top: 30px;">
              <a href="${
                process.env.NEXT_PUBLIC_VERCEL_URL
              }" style="display: inline-block; padding: 10px 20px; color: #fff; background-color: #4CAF50; border-radius: 5px; text-decoration: none;">Visit Fashion Spot</a>
            </div>
            <p style="font-size: 0.9em; color: #777; margin-top: 20px;">&copy; ${new Date().getFullYear()} Fashion Spot. All rights reserved.</p>
          </div>
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    return NextResponse.json(newUser);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create user", details: error.message },
      { status: 500 }
    );
  }
}
