const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const { createUser, getAllUsers, getSingleUser, deleteUser, updateUser } = require("../controllers/userController");

router.get("/", getAllUsers);

router.get("/:id", getSingleUser);

router.post("/newUser", createUser);

router.patch("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
