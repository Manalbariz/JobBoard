const userModel = require("../models/userModel");
const user = require("../models/userModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//get all users
const getAllUsers = async (req, res) => {
  const users = await user.find({}).sort({ createdAt: -1 }); // get all users. use user.find({Title: "user1"}) to get a specific user
  res.status(200).json(users);
};

// get single user
const getSingleUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "User does not exist" });
  }

  const singleUser = await user.findById(id);

  if (!singleUser) {
    return res.status(404).json({ error: "User does not exist" });
  }
  res.status(200).json(singleUser);
};

const createUser = async (req, res) => {
  const { firstname, lastname, address, email, password, cv, flag } = req.body;

  try {
    // Vérifiez si un utilisateur avec la même adresse e-mail existe déjà
    const existingUser = await user.findOne({ email });

    if (existingUser) {
      // Si un utilisateur avec la même adresse e-mail existe, renvoyez une erreur
      return res.status(400).json({ error: "Cet e-mail est déjà utilisé." });
    }

    // Si l'utilisateur n'existe pas, hachez le mot de passe et insérez-le dans la base de données
    const hashedPassword = await bcrypt.hash(password, 10); // salt = 10

    const newUser = await user.create({
      firstname,
      lastname,
      address,
      email,
      password: hashedPassword,
      cv,
      flag,
    });

    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update a user
const updateUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "User does not exist" });
  }
  const user = await userModel.findOneAndUpdate(
    { _id: id },
    {
      ...req.body, // spread operator : copy all the properties of req.body to the findOneAndUpdate object.
    }
  );
  if (!user) {
    return res.status(404).json({ error: "User does not exist" });
  }
  res.status(200).json({ message: "User updated successfully" });
};

// delete a User
const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "User does not exist" });
  }

  const user = await userModel.findOneAndDelete({ _id: id });

  if (!user) {
    return res.status(404).json({ error: "User does not exist" });
  }

  res.status(200).json({ message: "User deleted successfully" });
};

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
