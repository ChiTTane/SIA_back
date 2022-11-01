const mongoose = require("mongoose");

const creditSchema = new mongoose.Schema({
    date: { type: Date , default : Date.now()},
    capital: { type: Number },
    duree: { type: Number },
    taux: { type: Number },
    annuitee: { type: Number },
    datePreVer: { type: Date },
    numCli: 
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "client"
        }
      
})
module.exports = mongoose.model("credit", creditSchema);
