const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.send("Create products");
});

router.get("/", (req, res) => {
  res.send("Hello products");
});

module.exports = router;
