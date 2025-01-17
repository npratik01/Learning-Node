const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const app = express();
const PORT = 8000;


// Middleware - Plugin
app.use(express.urlencoded({extended: false}));

app.use((req, res, next) => {
  fs.appendFile("log.txt", `\n${Date.now()}: ${req.ip} ${req.method}: ${req.path}\n`, (err, data) => {next()});
})

app.use((req, res, next) => {
  console.log("Hello from middleware2", req.myUserName);
  //return res.end("Hey");
  next(); // for calling next function
})

//Routes:

app.get("/users", (req, res) => {
  const html = `
  <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
  </ul>`;

  res.send(html);
});

//REST API
app.get("/api/users", (req, res) => {
  res.setHeader("X-myName", "Pratik Nikam");
  return res.json(users);
});

app.route("/api/users/:id").get((req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  if(!user) return res.status(404).json({error: "user not found"})
  return res.json(user);
}).patch((req, res) => {
  // Edit the User with id
  return res.json({status: "pending"});
})
.delete((req, res) => {
  // Delete the User with id
  return res.json({status: "pending"});
});

app.post('/api/users', (req, res) => {
  const body = req.body;
  if(!body || !body.first_name || !body.email || !body.gender || !body.job_title || !body.last_name){
    return res.status(400).json({msg:"All fields are required"});
  }
  users.push({...body, id: users.length +1});
  fs.writeFile('./Mock_DATA.json', JSON.stringify(users),(err, data) => {
    return res.status(201).json({status: "Success", id: users.length });
  });
  
});


app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
