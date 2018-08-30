const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CustomerInstanceSchema = new Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  addressLine1: { type: String },
  addressLine2: { type: String },
  city: { type: String },
  state: { type: String },
  zipCode: { type: String },
  creditCard: { type: String },
  expiryDate: { type: String },
  CVV: { type: String },
  billingZip: { type: String }
});

module.exports = mongoose.model("Customers", CustomerInstanceSchema);
