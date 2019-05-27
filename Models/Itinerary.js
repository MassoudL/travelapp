const mongoose = require('mongoose');
const ItinerarySchema = new mongoose.Schema({

// create schema

    title: {
        type: String

    },
    profilePic: {
        type: String

    },
    rating: {
        type: Array

    },
    duration: {
        type: Array

    },
    price: {
        type: Array

    },
    hashtag: {
        type: Array

    },
    cityId: {
        type: String
        
    }
});

module.exports = Itinerary = mongoose.model('itinerary', ItinerarySchema);