"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
// middleware
const logger = (req, res, next) => {
    console.log({ url: req.url, method: req.method, hostname: req.hostname });
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
exports.default = app;
