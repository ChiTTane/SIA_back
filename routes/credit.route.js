const Credit = require('../model/credit')

const express = require('express')
const router = express.Router()

router.get("/sayHi", (req,res)=>{
   return  res.json('Hi !')
})

module.exports = router
