import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.render("index.ejs",{
    dayType: "a weekend",
    advice: "It's time to work hard",
  }
  );
});


app.listen(PORT, () => {
  console.log(`Server started on the PORT: ${PORT}`);
})