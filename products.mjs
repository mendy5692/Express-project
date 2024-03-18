import { Router } from "express";
import db from "./database.mjs";
const router = Router();
const products = [];
const productsCollection = db.collection("products");

router.get("/", async (req, res) => {
  const prods = await productsCollection.find().toArray();
  res.json({ data: products, status: "OK" });
});

router.get("/:id", async (req, res) => {
  const product = await productsCollection.findOne({
    _id: new Object(req.params.id),
  });
  res.json({
    data: product,
    status: "OK",
  });
});


router.post("/", async (req, res) => {
  await productsCollection.insertOne(req.body);
  res.send("Product created");
});

router.patch("/:id", async (req, res) => {
  await productsCollection.updateOne(
    { _id: new ObjectId(req.params.id) },
    {
      $set: req.body,
    }
  );
  res.send("Product updated");
});

router.delete("/:id", async (req, res) => {
  await productsCollection.deleteOne({
    _id: new ObjectId(req.params.id),
  });
  res.json({
    data: "Product Deleted",
  });
});

export default router;
