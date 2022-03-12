const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product_name: { type: "String", required: true },
    tagline: { type: "String", required: true },
    type_name: { type: "String", required: true }, //only coupons, exclusive, bogo and more
    category: { type: "String", required: true }, //babies & kids, clothing and apparel
    inner_tagline: { type: "String", required: true },
    inner_description: { type: "String", required: true },
    images: { type: "String", required: true },
    discount: { type: Number, required: true }, //0-49 or 50-80%
  },

  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("product", productSchema);
