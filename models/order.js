const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    orderId: {
      type: String,
      required: true,
    },
    paymentInfo: {
      type: String,
      default: "pending",
    },
    products: [
      {
        name: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    address: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Order || mongoose.model("Order", OrderSchema);
