import express, { json } from "express";
import Products from "./products.mjs";
import Users from "./users.mjs";
const app = express();
const port = 3001;

app.use(json());
app.use("/products", Products);
app.use("/users", Users);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
