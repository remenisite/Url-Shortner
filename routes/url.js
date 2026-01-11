const express = require("express");
const routes = express.Router();


routes.post('/create' , (req,res)=>{
    res.send('create url')
})

module.exports = routes;
