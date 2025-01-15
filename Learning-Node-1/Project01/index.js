const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const app = express();
const PORT = 8000;


// Middleware - Plugin
app.use(express.urlencoded({extended: false}));


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
  return res.json(users);
});

app.route("/api/users/:id").get((req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
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
  users.push({...body, id: users.length +1});
  fs.writeFile('./Mock_DATA.json', JSON.stringify(users),(err, data) => {
    return res.json({status: "Success", id: users.length });
  });
  
});




app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
