const express = require("express");
const app = express();
const port = 3001;

app.use("/users", require("./users"));
app.use("/products", require("./products"));

app.get("/", (req, res) => {
  res.send("Get home");
});

app.post("/", (req, res) => {
  res.send("Create home");
});

app.get("/", (req, res) => {
  res.send("Hello home");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
