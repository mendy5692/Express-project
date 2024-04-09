import dotenv from "dotenv";
dotenv.config();

import { MongoClient, ServerApiVersion } from "mongodb";

// const uri =
//   "mongodb+srv://s0533115692:5aYXQDl7uP8EvdsP@cluster0.bwwohzw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.bwwohzw.mongodb.net/`;

let client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  await client.connect();
} catch (e) {
  console.error(e);
}
const db = client.db("totahim");

export default db;
