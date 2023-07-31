const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName:"VFCstudio"
    // useFindAndModify: false

});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection success !");
});



const userRouter = require("./routes/users.js");
app.use("/user", userRouter);

const memberRouter = require("./routes/members.js");
app.use("/member",memberRouter);

const orderRouter = require("./routes/order.js");
app.use("/order",orderRouter);




app.listen(PORT, () => {
    console.log(`Server is up and running on port number : ${PORT}`);
});


