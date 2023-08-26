const router = require("express").Router();
const { response, request } = require("express");
const Order = require("../models/orders.js");

// insert new order to the system

router.route("/addNew").post(async (requst, response) => {
  const { total, firstname, lastname, address, items } = requst.body;

  const newOrder = Order({
    firstname,
    lastname,
    address,
    items,
    total
  });

  const add = await newOrder
    .save()
    .then(() => {
      console.log("Order created!");
      response.status(200).send({ status: "Order created!" });
    })
    .catch((err) => {
      console.log(err);
      response.status(500).send("server error");
    });
});


// Get the details of the orders 
router.route("/").get((req, res) => {
  Order
    .find()
    .then((Order) => {
      res.json(Order);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
