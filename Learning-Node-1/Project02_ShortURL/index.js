const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const URL = require("./models/url");
const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("MongoDB Connected")
);

app.use(express.json());

app.use("/url", urlRoute);

app.get("./:nanoid", async (req, res) => {
  const nanoid = req.params.nanoid;
  await URL.findOneAndUpdate(
    {
      nanoid,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
