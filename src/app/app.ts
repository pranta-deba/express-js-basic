import express from "express";
const app = express();

// parsers
app.use(express.json());
app.use(express.text());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/post", (req, res) => {
  console.log(req.body);
  res.json({
    message: "post successfully",
  });
});

export default app;
