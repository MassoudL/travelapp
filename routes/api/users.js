const express = require('express');
const router = express.Router();

//@route    POST api/users
//@desc     Register user
//@access   Public ()
router.post('/', (req, res) => {
    console.log(req.body); // This is the object of data that is sent to the route. 
    res.send('Users route');
});

module.exports = router;