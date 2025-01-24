const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.cookie("name", "Pratik");
  res.send("done");
});

app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
})