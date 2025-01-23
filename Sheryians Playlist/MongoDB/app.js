const express = require("express");
const app = express();

const userModel = require('./userModel');

app.get('/', (req, res) => {
  res.send("hey");
});

app.get('/create', async (req, res) => {
  let createUser = await userModel.create({
    name: "Pratik",
    email: "pratiknikam123@gmail.com",
    username: "pratik"
  })
  res.send(createUser);
});

app.get('/update', async (req, res) => {
  let updateDUser = await userModel.findOneAndUpdate({username: "pratik"}, {name: "Pratik Vijay Nikam"}, {new: true})
  res.send(updateDUser);
});

app.get("/read", async (req, res) => {
  let users = await userModel.find();
  res.send(users);
})

app.get("/delete", async (req, res) => {
  let users = await userModel.findOneAndDelete({username: "pratik"});
  res.send(users);
})

app.listen(3000);