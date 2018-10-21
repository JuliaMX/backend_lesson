var express = require('express');
var router = express.Router();
const User = require("../models/user");


// this is our get method
// this method fetches all available data in our database
router.get("/", (req, res) => {
    User.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});


// this is our create method
router.post("/", (req, res) => {
    var user = new User();

    const name = req.body.name;
    const age = req.body.age;

    user.name = name;
    user.age = age;
    user.save(err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

module.exports = router;


