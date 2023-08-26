const router = require("express").Router();
const { response, request } = require("express");
const Equipment = require("../models/equipment.js");

// insert new equipment to the shop

router.route("/add").post(async (requst, response) => {
  const { name,price,imagePath } = requst.body;

  const newEquipment = Equipment({
   name,
   price,
   imagePath
  });

  const add = await newEquipment
    .save()
    .then(() => {
      console.log("Equipment added !");
      response.status(200).send({ status: "Equipment added !" });
    })
    .catch((err) => {
      console.log(err);
      response.status(500).send("server error");
    });
});


// Get the details of the trainer that joined
router.route("/").get((req, res) => {
    Equipment
      .find()
      .then((equipments) => {
        res.json(equipments);
      })
      .catch((err) => {
        console.log(err);
      });
  });



module.exports = router;