const router = require("express").Router();
const { response, request } = require("express");
const Trainer = require("../models/trainer.js");

// insert new member to the system

router.route("/add").post(async (requst, response) => {
  const { name,about,imagePath } = requst.body;

  const newTrainer = Trainer({
   name,
   about,
   imagePath
  });

  const add = await newTrainer
    .save()
    .then(() => {
      console.log("Trainer added !");
      response.status(200).send({ status: "Trainer added !" });
    })
    .catch((err) => {
      console.log(err);
      response.status(500).send("server error");
    });
});


// Get the details of the trainer that joined
router.route("/").get((req, res) => {
    Trainer
      .find()
      .then((trainers) => {
        res.json(trainers);
      })
      .catch((err) => {
        console.log(err);
      });
  });


module.exports = router;