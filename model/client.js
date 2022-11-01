const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    nom: { type: String },
    prenom: { type: String },
    adresse: { type: String },
    ville: { type: String },
    tel: { type: String },
    mail: { type: String }
      
})
module.exports = mongoose.model("client", clientSchema);
