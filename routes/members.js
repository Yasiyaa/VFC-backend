const router = require("express").Router();
const { response, request } = require("express");
const Member = require("../models/member.js");

// insert new member to the system

router.route("/add").post(async (requst, response) => {
  const { email,plan,payment } = requst.body;

  const newMember = Member({
   email,
   plan,
   payment
  });

  const add = await newMember
    .save()
    .then(() => {
      console.log("Member added !");
      response.status(200).send({ status: "Member added !" });
    })
    .catch((err) => {
      console.log(err);
      response.status(500).send("server error");
    });
});



// Get the details of the member that entered
router.route("/").get((req, res) => {
  Member
    .find()
    .then((members) => {
      res.json(members);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;