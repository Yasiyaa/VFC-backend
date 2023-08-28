const { default: mongoose, mongo } = require("mongoose");

const Schema = mongoose.Schema;

const trainerSchema = new Schema({

    name: {
        type: String,
      
    },
    about :{
        type: String,
      
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