import { Router } from "express";
import db from "./database.mjs";
import { ObjectId } from "mongodb";
const router = Router();
const decorationsCollection = db.collection("decorations");

router.get("/", async (req, res, next) => {
  try {
    const decorations = await decorationsCollection.find().toArray();
    res.status(200).json(decorations);
  } catch (error) {
    next(error);
  }
});

router.get("/:_id", async (req, res, next) => {
  try {
    const product = await decorationsCollection.findOne({
      _id: new ObjectId(req.params._id),
    });
    if (!product) throw new Error("Product not found");
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const product = await decorationsCollection.insertMany(req.body);
    res.status(201).send(product.insertedId);
  } catch (error) {
    next(error);
  }
});

router.patch("/:_id", async (req, res, next) => {
  try {
    await decorationsCollection.updateOne(
      { _id: new ObjectId(req.params._id) },
      {
        $set: req.body,
      }
    );
    res.status(200).send("Updated successfully");
  } catch (error) {
    next(error);
  }
});

router.delete("/:_id", async (req, res, next) => {
  try {
    await decorationsCollection.deleteOne({
      _id: new ObjectId(req.params._id),
    });
    res.status(200).send("Deleted");
  } catch (error) {
    next(error);
  }
});

export default router;
