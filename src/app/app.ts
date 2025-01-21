import express from "express";
const app = express();

// parsers
app.use(express.json());
app.use(express.text());

// get
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// post
app.post("/post", (req, res) => {
  console.log(req.body);
  res.json({
    message: "post successfully",
    yourData: req.body,
  });
});

// params
app.get("/param/:id", (req, res) => {
  console.log(req.params);
  res.json({
    message: "param get successfully and param is " + req.params.id,
  });
});

// nested params
app.get("/nested-params/:id/:email", (req, res) => {
  console.log(req.params);
  res.json({
    message:
      "params get successfully and param is: " +
      req.params.id +
      " and email is :" +
      req.params.email,
  });
});

// query params
app.get("/query", (req, res) => {
  console.log(req.query);
  res.json({
    message: "query get successfully, and your query email is : "+ req.query.email,
  });
});

export default app;
