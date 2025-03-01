import express from "express";

const app = express();
const port = 3000; // default port to listen

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
