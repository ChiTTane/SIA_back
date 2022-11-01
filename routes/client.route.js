const Client = require('../model/client')
const Credit = require('../model/credit')
const express = require('express')
const router = express.Router()

router.get("/sayHi", (req,res)=>{
   return  res.json('Hi !')
})

router.post("/registerUser", async (req,res)=>{
   const {  nom, prenom,  email , tel,ville,adresse  } = req.body;
   const existingUser = await Client.findOne({mail : email})
   if(existingUser){
      return res.json({errorMessage:"User with the mail "+email+ " already has an allocated credit."})
   }
   const client = await Client.create({
      nom:nom,
      prenom:prenom,
      mail:email,
      tel:tel,
      ville:ville,
      adresse:adresse,

   })
   let date=new Date()
   let payementDate=new Date(date.getFullYear(),date.getMonth()+1,date.getDate()+1)
   await Credit.create({
      datePreVer:payementDate,
      capital:req.body.capital,
      duree:req.body.duree,
      annuitee:req.body.annuitee,
      taux:req.body.taux,
      numCli:client._id,
   })
   console.log(req.body)
   return res.json({succesMessage:"Client added succesfully with the credit. Click on Credit to see the history."});

})

module.exports = router
