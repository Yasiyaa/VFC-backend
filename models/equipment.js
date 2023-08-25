const { default: mongoose, mongo } = require("mongoose");

const Schema = mongoose.Schema;

const equipmentSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    price :{
        type: Number,
        required: true,
    }
})

const equipment = mongoose.model("equipments",equipmentSchema);

module.exports = equipment;