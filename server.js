const express = require("express");
const app = express();

// Middleware
app.use(express.json());
app.use(express.static("public"));

// Products route
const productsRoute = require("./routes/products");
app.use("/products", productsRoute);

// Default route
app.get("/", (req, res) => {
  res.send("Herbal Store Server is Running");
});

// Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
