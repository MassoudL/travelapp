const mongoose = require('mongoose'); //

const UserSchema = new mongoose.Schema({ //variable called schema//


    //this takes an object with the fields that are needed.
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true //avoiding that 2 people have the same email address. 
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now //automatically - giving then current date. 
    }
});

module.exports = User = mongoose.model('user', UserSchema); 
//set a variable called user, set it to mongoose.mdel
//taking in 2 things which is the model name "user" and the "schema" called UserSchema.  

//all other information will be in the profile. 
