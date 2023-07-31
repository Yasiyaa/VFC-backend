const router = require("express").Router();
const Student = require("../models/student.js");



// router to insert student data into the data base
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const gender = req.body.gender;

  const newStudent = new Student({
    name,
    age,
    gender,
  });

  newStudent
    .save()
    .then(() => {
      res.json("Student Added ");
    })
    .catch((err) => {
      console.log(err);
    });
});

// Get the details of the student that entered
router.route("/").get((req, res) => {
  Student
    .find()
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      console.log(err);
    });
});

//update details of the student
// http//localhost:8070/student/update/:id
router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id; // must use the parameter that declared in side the route URL ("update/:id")

  // Destructure
  const { name, age, gender } = req.body;
  //====================================//

  const updateStudent = {
    name,
    age,
    gender,
  };

  const update = await student.findByIdAndUpdate(userId, updateStudent)
    .then(() => {
      res.status(200).send({ status: "user updated" }); // this used for send the response to the frontend
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error with the updating user " });
    });
});

// delete user by ID
router.route("/delete/:id").delete(async (req, res) => {
  const userId = req.params.id;

  await Student
    .findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "user deleted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error with delete user", error: err });
    });
});

//get one user by ID
router.route("/get/:id").get(async (req, res) => {
  const userId = req.params.id;

  const user = await Student.findById(userId)
    .then((student) => {
      res.status(200).send({ status: "user fetched",student});
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error with get user", error: err });
    });
});
module.exports = router;
