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

//by ratings

router.get("/rate", async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 4;
    const skip = (page - 1) * limit;

    const users = await Product.find()
      .skip(skip)
      .limit(limit)
      .sort({ ratings: -1 });

    const totalPages = Math.ceil(
      (await Product.find().countDocuments()) / limit
    );

    return res.status(200).send(users);
  } catch (e) {
    return res.status(400).json({ message: e.message, status: "Failed" });
  }
});

//by discount

module.exports = router;
