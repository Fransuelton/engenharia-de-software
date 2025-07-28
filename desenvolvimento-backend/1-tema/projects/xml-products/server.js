const express = require("express");
const parseString = require("xml2js").parseString;
const fs = require("fs");

const app = express();
const port = 3000;

app.get("/products", (req, res) => {
  fs.readFile("./products.xml", "utf-8", (error, data) => {
    if (error) {
      return res.json({
        success: false,
        message: "❌ Error reading file.",
        data: error,
      });
    }

    parseString(data, (error, result) => {
      if (error) {
        return res.json({
          success: false,
          message: "❌ error parsing XML.",
          data: error,
        });
      }

      return res.json({
        success: true,
        message: "✅ Products has been retrieved!",
        data: result.products.product,
      });
    });
  });
});

app.get("/products/:id", (req, res) => {
  fs.readFile("./products.xml", "utf-8", (error, data) => {
    if (error) {
      return res.json({
        success: false,
        message: "❌ Error reading file.",
        data: error,
      });
    }

    parseString(data, (error, result) => {
      if (error) {
        return res.json({
          success: false,
          message: "❌ error parsing XML.",
          data: error,
        });
      }

      const products = result.products.product;

      const filteredProduct = products.filter(
        (product) => product.$.id == Number(req.params.id)
      );

      if (filteredProduct.length === 0) {
        return res.status(404).json({
          success: false,
          message: "❌ Product not found.",
        });
      }

      return res.json({
        success: true,
        message: "✅ Product has been retrieved!",
        data: filteredProduct,
      });
    });
  });
});

app.listen(port, (req, res) => {
  console.log(`🚀 Server is running on port: ${port}!`);
});
