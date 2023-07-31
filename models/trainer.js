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
    }
})

const trainer = mongoose.model("trainers",trainerSchema);

module.exports = trainer;