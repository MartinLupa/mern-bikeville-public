const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        product_info: { type: String },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    shipping: {
      courier_company: { type: String },
      courier_cost: { type: Number },
    },
    total: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
