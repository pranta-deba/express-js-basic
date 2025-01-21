import express, { NextFunction, Request, Response } from "express";
import { hostname } from "os";
const app = express();

// parsers
app.use(express.json());
app.use(express.text());





// router
const userRouter = express.Router();
const courseRouter = express.Router();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/course", courseRouter);

userRouter.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  res.json({
    success: true,
    message: "user created successfully.",
    data: user,
  });
});

courseRouter.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);
  res.json({
    success: true,
    message: "course created successfully.",
    data: course,
  });
});









// middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  // console.log({ url: req.url, method: req.method, hostname: req.hostname });
  next();
};

// get
app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello world!");
});

// post
app.post("/post", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "post successfully",
    yourData: req.body,
  });
});

// params
app.get("/param/:id", (req: Request, res: Response) => {
  console.log(req.params);
  res.json({
    message: "param get successfully and param is " + req.params.id,
  });
});

// nested params
app.get("/nested-params/:id/:email", (req: Request, res: Response) => {
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
    message:
      "query get successfully, and your query email is : " + req.query.email,
  });
});

export default app;
