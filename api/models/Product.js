const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const ProductSchema = new mongoose.Schema(
  {
    model: { type: String, required: true, unique: true },
    trail_type: { type: String, required: true },
    product_id: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    short_description: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    brake_type: { type: String, required: true },
    groupset: { type: String, required: true },
    sizes: { type: Array, required: true },
    net_price: { type: Number, required: true },
    vat: { type: Number, required: true },
    full_price: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
