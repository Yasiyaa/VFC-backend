const { default: mongoose, mongo } = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  firstname: {
    type: String,
 
  },
  lastname: {
    type: String,
  },
  address: {
    type: String,
  
  },
  items: [
    {
      product: {
        type: String,
      
      }
    },
  ],

  telephone:{
    type: Number

  },
  
  total: {
    type: Number,
  },
});

const orders = mongoose.model("orders", orderSchema);

module.exports = orders;
