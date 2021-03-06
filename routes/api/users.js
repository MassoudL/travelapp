var express = require("express");
var router = express.Router();

var User = require("../../models/User");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var key = require("../../config/key");

router.post("/register", function(req, res) {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res
        .status(400)
        .json({ error: "This email has already been used!" });
    }

    if (req.body.password !== req.body.passwordConfirmation) {
      return res.status(400).json({ error: "The passwords are not matching!" });
    }

    var hashedPassword = bcrypt.hashSync(req.body.password, 8);

    User.create(
      {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
      },
      function(err, user) {
        if (err)
          return res
            .status(500)
            .send("There was a problem registering the user.");

        // create a token
        var token = jwt.sign({ id: user._id }, key.secret, {
          expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token });
      }
    );
  });
});

router.get("/me", function(req, res) {
  var token = req.headers["x-access-token"];
  if (!token)
    return res.status(401).send({ auth: false, message: "No token provided." });

  jwt.verify(token, key.secret, function(err, decoded) {
    if (err)
      return res
        .status(500)
        .send({ auth: false, message: "Failed to authenticate token." });

    // res.status(200).send(decoded);
    console.log(decoded);
    User.findById(decoded.id, function(err, user) {
      if (err)
        return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");

      res.status(200).send(user);
    });
  });
});

module.exports = router;