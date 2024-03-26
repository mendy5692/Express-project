import express, { json } from "express";
import judaica from "./judaica.mjs";
import art from "./art.mjs";
import decorations from "./decorations.mjs";
import cors from "cors";
const app = express();
const port = 3001;

app.use(json());
app.use(cors());
app.use("/judaica", judaica);
app.use("/art", art);
app.use("/decorations", decorations);
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).send(error.message);
});
// app.use("/users", Users);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
