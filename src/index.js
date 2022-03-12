const express = require("express");

const app = express();

app.use(express.json());

const cors = require("cors");

app.use(cors());

const productController = require("./controllers/product.controller");

app.use("/product", productController);

module.exports = app;
//
