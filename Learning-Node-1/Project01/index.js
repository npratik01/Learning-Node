const express = require("express");
const {connectMongoDb} = require("./connection");

const {logReqRes} = require("./middlewares");

const userRouter = require("./Routes/user");

const app = express();
const PORT = 8000;

// Connection
connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1");

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

app.use(logReqRes("log.txt"));

//Routes:
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
