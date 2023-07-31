const { default: mongoose, mongo } = require("mongoose");

const Schema = mongoose.Schema;

const memberSchema = new Schema({

    email:{
        type:String,
        require: true,
    },
    plan:{
        type:String,
    },
    trainer :{
        type:String
    }

})

const member = mongoose.model("members",memberSchema);

module.exports = member;