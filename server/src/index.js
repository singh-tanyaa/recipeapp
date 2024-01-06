import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";
const path = require("path");

const app = express();
//static files access
app.use(express.static(path.join(__dirname, "./client/build")));
//routes
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(
  "mongodb+srv://tanya:aKerl52qeelWDGjq@recipes.5hwbzlv.mongodb.net/recipes?retryWrites=true&w=majority"
);

app.listen(3001, () => console.log("Server started"));
