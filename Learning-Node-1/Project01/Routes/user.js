const express = require("express");
const {
  handleGetAllUsers,
  handleGetUserbyID,
  handleUpdateUserByID,
  handleDeleteUserByID,
  handleCreateNewUser,
} = require("../Controllers/user");

const router = express.Router();

router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

router
  .route("/:id")
  .get(handleGetUserbyID)
  .patch(handleUpdateUserByID)
  .delete(handleDeleteUserByID);

module.exports = router;
