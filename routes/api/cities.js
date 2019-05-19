const express = require('express');

const router = express.Router();

const City = require("../../Models/City")

router.get('/', function(req, res){
    City.find().then(results => {
        res.json(results);
    }).catch(function(err){
        console.error(err)
        res.send(err.message)
    });
})



module.exports =  router;