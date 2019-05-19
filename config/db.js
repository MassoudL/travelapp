const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// we need sth to call within the server.js file. For this the arrow function below will be created. 

const connectDB = async () => { 
    //mongoose.connect will be run inside the try-catch block.
    try {
        await mongoose.connect(db,{ // since mongoose.connect returns a promise we put await before it.
            // inside the () we put db.

            useNewUrlParser:true,
            useCreateIndex:true,
            useFindAndModify:false,

        });  
        

        console.log('MongoDB Connected...');

         
    } catch (err) {
        // if soemthing goes wrong we pass in an error which has a message property in it. 
      console.error(err.message);
      // Exit process with failure
      process.exit(1); 
    }
};

module.exports = connectDB;