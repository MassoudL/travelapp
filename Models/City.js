const mongoose = require('mongoose'); //

const CitySchema = new mongoose.Schema({ //variable called schema//

    //object name with type and required.
    cityName: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true
    }
    
});

module.exports = City = mongoose.model('city', CitySchema); 
//set a variable called user, set it to mongoose.model
//taking in 2 things which is the model name "user" and the "schema" called UserSchema.  

//all other information will be in the profile. 