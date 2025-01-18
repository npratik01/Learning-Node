const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 8000;
const mongoose = require("mongoose");
const userRouter = require("./Routes/user")


// Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/youtube-app-1")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo Error", err));

// Schema
// const userSchema = new mongoose.Schema({
//   firstName: {
//     type: String,
//     required: true,
//   },
//   lastName: {
//     type: String,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   jobTitle: {
//     type: String,
//   },
//   gender: {
//     type: String,
//   },
  
// }, {timestamps: true});

// const User = mongoose.model("user", userSchema);

// Middleware - Plugin
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `\n${Date.now()}: ${req.ip} ${req.method}: ${req.path}\n`,
    (err, data) => {
      next();
    }
  );
});

app.use((req, res, next) => {
  console.log("Hello from middleware2", req.myUserName);
  //return res.end("Hey");
  next(); // for calling next function
});

//Routes:
app.use("/user", userRouter);



app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
