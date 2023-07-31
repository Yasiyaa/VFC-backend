const { default: mongoose, mongo } = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({

    email: {
        type: String,
        required: true,
    },
    password :{
        type: String,
        required: true,
    }
})

const user = mongoose.model("Users",userSchema);

module.exports = user;