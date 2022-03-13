const express = require("express");

const Product = require("../models/product.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);

    return res.status(200).send(product);
  } catch (e) {
    return res.status(400).json({ message: e.message, status: "Failed" });
  }
});

router.get("/", async (req, res) => {
  try {
    const product = await Product.find().lean().exec();

    return res.status(200).send(product);
  } catch (e) {
    return res.status(400).json({ message: e.message, status: "Failed" });
  }
});

router.get("/sort", async (req, res) => {
  try {
    const product = await Product.find().sort({ product_name: 1 });

    return res.status(200).send(product);
  } catch (e) {
    return res.status(400).json({ message: e.message, status: "Failed" });
  }
});
//by ratings

//by discount

module.exports = router;
