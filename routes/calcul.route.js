const Client = require('../model/client')
const Credit = require('../model/credit')
const express = require('express')
const router = express.Router()

router.post("/calculAnnuitee",(req,res)=>{
    console.log(req.body)
    let t = req.body.taux/100
    let n = req.body.duree
    let c = req.body.capital
    let  tm = Math.pow(1 + t,  1 / 12) - 1;
    console.log(tm)
    let annuitee = (Math.pow(1 + tm, n) * tm * c) / (Math.pow(1 + tm, n) - 1);
    console.log(annuitee)
    return res.json({annuitee:annuitee});
})
router.post("/calculCredit",(req,res)=>{
    console.log(req.body)
    let t = req.body.taux/100
    let n = req.body.duree
    let a = req.body.annuitee
    let  tm = Math.pow(1 + t,  1 / 12) - 1;
    console.log(tm)
    let capital = (a * (Math.pow(1 + tm, n) - 1)) / (Math.pow(1 + tm, n) * tm);
    console.log(capital)
    return res.json({capital:capital});
})
router.post("/calculDuree",(req,res)=>{
    console.log(req.body)
    let t = req.body.taux/100
    let a = req.body.annuitee
    let c = req.body.capital
    let  tm = Math.pow(1 + t,  1 / 12) - 1;
    console.log(tm)
    let duree = Math.log(a / (a - (tm * c))) / Math.log(1 + tm);
    console.log(duree)
    return res.json({duree:duree});
})

module.exports = router
