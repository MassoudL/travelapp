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

router.get('/:id', (req, res) => {
    
    Itinerary.find({"cityId": req.params.id}, (err ,itineraryList ) => {
        if(err) console.log("error: " + err)
        console.log("test")
          res.send(itineraryList)
        
    })

    
})

module.exports =  router;