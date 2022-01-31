const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const UserSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true, unique: false },
    last_name: { type: String, required: true, unique: false },
    email: { type: String, required: true, unique: true },
    repeat_email: { type: String, required: false, unique: false },
    address: {
      street: { type: String, required: true, unique: false },
      street_number: { type: Number, required: true, unique: false },
      postal_code: { type: Number, required: true, unique: false },
      city: { type: String, required: true, unique: false },
      country: { type: String, required: true, unique: false },
    },
    password: { type: String, required: true, unique: false },
    repeat_password: { type: String, required: true, unique: false },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
