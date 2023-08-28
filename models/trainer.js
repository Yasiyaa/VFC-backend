const { default: mongoose, mongo } = require("mongoose");

const Schema = mongoose.Schema;

const trainerSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    about :{
        type: String,
        required: true,
    },
    imagePath: {
        type: String
    },
    username: {
        type: String
    },
    password:{
        type: String
    }
})

const trainer = mongoose.model("trainers",trainerSchema);

module.exports = trainer;