const express = require('express');

const router = express.Router();

const Itinerary = require("../../Models/Itinerary")

router.get('/', function(req, res){
    Itinerary.find().then(results => {
        console.log(results);
        res.send(results);
    }).catch(function(err){
        console.error(err.message);
    });
})

router.get('/:id', function(req, res){
    console.log("from nodes", req);
    Itinerary.find({"cityId": req.params.id}, (itineraryList, err) => {
        if(err){
            console.log(err)
        }else{
            console.log(itineraryList)
            res.send(itineraryList)
        }
    })

    
})

module.exports =  router;