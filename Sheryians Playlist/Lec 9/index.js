const express = require('express');
const app = express();
const path = require("path");
const PORT = 3000;
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
  fs.readdir(`./files`, (err, files) => {
    res.render("index", {files: files});
  })
});

app.get('/file/:fileName', (req, res) => {
  fs.readFile(`./files/${req.params.fileName}`, "utf-8", (err, filedata) => {
    res.render("show", {fileName: req.params.fileName, filedata: filedata});
  })
});

app.post('/create', (req, res) => {
  fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, (err) => {
    res.redirect("/");
  })
});

app.listen(PORT, () =>{
  console.log(`Server is running on PORT : ${PORT}`)
})
