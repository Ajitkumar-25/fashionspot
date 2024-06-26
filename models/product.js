const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    size: {
      type: [String], // Array of strings
      required: true,
    },
    color: {
      type: [String], // Array of strings
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    availableQty: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
