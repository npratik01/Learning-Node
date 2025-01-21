import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Us</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Us</h1>");
});

app.listen(PORT, () => {
  console.log(`Server started at Port ${PORT}`);
})