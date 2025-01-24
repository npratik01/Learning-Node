const express = require('express');
const app = express();
const PORT = 8000;
const path = require("path");
const userModel = require('./models/user');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
  res.render("index");
});

app.get('/read', (req, res) => {
  res.render("read");
});

app.post('/create', async (req, res) => {
  let {name, email, image} = req.body;
  let createDUser = await userModel.create({
    name, 
    email,
    image
  });

  res.send(createDUser);  
});


app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`)
});