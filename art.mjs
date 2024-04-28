import { Router } from "express";
import db from "./database.mjs";
import { ObjectId } from "mongodb";
const router = Router();
const artCollection = db.collection("art");

router.get("/", async (req, res, next) => {
  try {
    const art = await artCollection.find().toArray();
    console.log("hahahaahhahahaha")
    res.status(200).json(art);
  } catch (error) {
    next(error);
  }
});

router.get("/:_id", async (req, res, next) => {
  try {
    const product = await artCollection.findOne({
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
    const product = await artCollection.insertMany(req.body);
    res.status(201).send(product.insertedId);
  } catch (error) {
    next(error);
  }
});

router.patch("/:_id", async (req, res, next) => {
  try {
    await artCollection.updateOne(
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
    await artCollection.deleteOne({ _id: new ObjectId(req.params._id) });
    res.status(200).send("Deleted");
  } catch (error) {
    next(error);
  }
});

export default router;
