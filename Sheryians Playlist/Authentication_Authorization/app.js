const express = require("express");
const app = express();
const PORT = 8000;

app.use

app.get("/", (req, res) => {
  res.cookie("name", "Pratik");
  res.send("done");
});

app.get("/read", (req, res) => {
  console.log(req.cookies);
  res.send("read page");
});

app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
})