//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
var password = "";

import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}));

var passYes = false;

function secretVerifier(req, res, next){
  const password = req.body["password"];
  if(password == "ILoveProgramming"){
      passYes = true;
  }
  next();
}

app.use(secretVerifier);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if(passYes){
    res.sendFile(__dirname + "/public/secret.html");
  }
  else{
    res.sendFile(__dirname + "/public/index.html");
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});