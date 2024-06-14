import { NextResponse } from "next/server";
import Order from "@/models/order";
import connectDB from "@/middleware/mongooseconnection";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

export async function POST(request) {
  await connectDB();
  try {
    const { email, products, address, amount, status, city, state, pincode } =
      await request.json();
    const orderId = new mongoose.Types.ObjectId().toString();

    const newOrder = new Order({
      email,
      orderId,
      products,
      address,
      amount,
      status,
    });

    await newOrder.save();

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
      subject: "Order Confirmation - Fashion Spot",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h1 style="color: #4CAF50;">Order Confirmation</h1>
          <p>Thank you for your order. Here are the details:</p>
          <p style="font-size: 1.2em; margin-bottom: 0;"><strong>Order ID:</strong></p>
          <p style="margin-top: 0;">${orderId}</p>
          <p style="font-size: 1.2em; margin-bottom: 0;"><strong>Email:</strong></p>
          <p style="margin-top: 0;">${email}</p>
          <p style="font-size: 1.2em; margin-bottom: 0;"><strong>Shipping Address:</strong></p>
          <p style="margin-top: 0;">${address}, ${city}, ${state}, ${pincode}</p>
          <p style="font-size: 1.2em; margin-bottom: 0;"><strong>Total Amount:</strong></p>
          <p style="margin-top: 0;">₹${amount.toFixed(2)}</p>
          <h2 style="color: #4CAF50;">Products</h2>
          <ul style="list-style-type: none; padding: 0;">
            ${products
              .map(
                (product) => `
              <li style="border-bottom: 1px solid #ddd; padding: 10px 0;">
                <strong>${product.name}</strong> - Quantity: ${product.quantity}
              </li>`
              )
              .join("")}
          </ul>
          <p style="margin-top: 20px;">We will notify you when your order is shipped.</p>
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

    return NextResponse.json(newOrder);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create order", details: error.message },
      { status: 500 }
    );
  }
}
