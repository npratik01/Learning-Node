const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  const allDbUsers = await User.find({});
  res.setHeader("X-myName", "Pratik Nikam");
  return res.json(allDbUsers);
});

router
  .route("/:id")
  .get(async (req, res) => {
    // const id = Number(req.params.id);
    // const user = users.find((user) => user.id === id);
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "user not found" });
    return res.json(user);
  })
  .patch(async (req, res) => {
    // Edit the User with id
    await User.findByIdAndUpdate(req.params.id, {lastName: "Changed"});
    return res.json({ status: "pending" });
  })
  .delete(async (req, res) => {
    // Delete the User with id
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "pending" });
  });

  router.post("/", async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.email ||
    !body.gender ||
    !body.job_title ||
    !body.last_name
  ) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });

  return res.status(201).json({ msg: "success" });
});

module.exports = router;