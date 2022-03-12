const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product_name: { type: String, required: true },
    product_logo: { type: String, required: true },
    tagline: { type: String, required: true },
    type: { type: String, required: true },
    category: { type: String, required: true },
    inner_tagline: { type: String, required: true },
    inner_description: { type: String, required: true },
    images: { type: Array, required: true },
    discount: { type: Number, required: true },
  },

  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("product", productSchema);
