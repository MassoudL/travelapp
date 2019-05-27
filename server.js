const express = require('express');
const connectDB = require('./config/db');
// const usersRoute = require('./routes/api/users');
// const authRoute = require('./routes/api/auth');
// const profileRoute = require('./routes/api/profile');
// const postsRoute = require('./routes/api/posts');
// const cityRoute = require('./routes/api/cities');



const app = express();

// Connect Database
connectDB();

const port = process.env.PORT || 5000;

// Define Routes
// app.use('/api/cities', cityRoute);
// app.use('/api/users', usersRoute);
// app.use('/api/auth', authRoute);
// app.use('/api/profile', profileRoute);
// app.use('/api/posts', postsRoute);

const bodyParser = require('body-parser');
const cors = require('cors');

const citiesRoute = require('./routes/api/cities');
const usersRoute = require('./routes/api/users');


const itinerariesRoute = require('./routes/api/itineraries')

app.use(bodyParser.json());
app.use(cors());

app.use('/api/cities', citiesRoute);
app.use('/api/itineraries', itinerariesRoute);


app.listen(port, () => {
    console.log('Server is running on ' + port + ' port' )
})