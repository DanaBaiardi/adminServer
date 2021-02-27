const mongoose = require("mongoose");
const ClientSchema = mongoose.Schema({
  clientName: {type: String, required: true, trim: true },
  address: { type: String, required: false, trim: true },
  identificator: { type: String, required: false, trim: true },
  asignedRoute: { type: String, required: false, trim: true },
  created: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Client", ClientSchema);
