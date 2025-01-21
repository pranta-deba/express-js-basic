"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
// router
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/course", courseRouter);
userRouter.post("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "user created successfully.",
        data: user,
    });
});
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "course created successfully.",
        data: course,
    });
});
// middleware
const logger = (req, res, next) => {
    // console.log({ url: req.url, method: req.method, hostname: req.hostname });
    next();
};
// get
app.get("/", logger, (req, res) => {
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
        message: "params get successfully and param is: " +
            req.params.id +
            " and email is :" +
            req.params.email,
    });
});
// query params
app.get("/query", (req, res) => {
    console.log(req.query);
    res.json({
        message: "query get successfully, and your query email is : " + req.query.email,
    });
});
// error handle
app.get("/error", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(something);
    }
    catch (error) {
        // res.status(400).json({
        //   success: false,
        //   message: "failed to get data",
        // });
        next(error); // call and pass error in global 
    }
}));
// route not found
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: 'Route is not found'
    });
});
// global error handle
app.use((error, req, res, next) => {
    console.log(error);
    if (error) {
        res.status(400).json({
            success: false,
            message: "Something went wrong!",
        });
    }
});
exports.default = app;
