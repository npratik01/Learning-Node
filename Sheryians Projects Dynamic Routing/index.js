const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/profile/:username", (req, res) => {
  res.send(`Welcome, ${req.params.username}`);
});

app.listen(PORT, () =>{
  console.log(`Server is running on the PORT ${PORT}`);
} )