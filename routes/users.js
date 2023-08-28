const router = require("express").Router();
const { response, request } = require("express");
const User = require("../models/user.js");

// insert new doctor to the system

router.route("/addNew").post(async (requst, response) => {
  const { email, password,name,telephone } = requst.body;



  const newUser = User({
    email,
    password,
    name,
    telephone
  });

  const add = await newUser
    .save()
    .then(() => {
      console.log("User added !");
      response.status(200).send({ status: "User added !" });
    })
    .catch((err) => {
      console.log(err);
      response.status(500).send("server error");
    });
});

router.route("/authenticate").post(async (requst, response) => {
  const { email, password } = requst.body;


 
  try {
    const user = await User.findOne({ email: email });
    if (user.password == password) {
      response.json(user);
    }
    if (!user) {
      return response.status(404).json({ Status: "user not found" });
    }
  } catch (err) {
    console.error(err);
    response.status(500).send({ Status: "Error" });
  }
});

// Get a specific user by email
router.route("/:email").get(async (request, response) => {
  const userEmail = request.params.email;

  
  console.log("hereeeeeeeeeeee")

  try {
    const user = await User.findOne({ email: userEmail });
    if (user.password == userEmail.password) {
      response.json(user);
    }
    if (!user) {
      return response.status(404).json({ Status: "user not found" });
    }
  } catch (err) {
    console.error(err);
    response.status(500).send({ Status: "Error" });
  }
});

module.exports = router;