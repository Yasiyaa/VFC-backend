const { default: mongoose, mongo } = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  firstname: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
  },
  address: {
    type: String,
    require: true,
  },
  items: [
    {
      product: {
        type: String,
        required: true,
      }
    },
  ],
  
  total: {
    type: Number,
  },
});

const orders = mongoose.model("orders", orderSchema);

module.exports = orders;
