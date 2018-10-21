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
router.post("/putUser", (req, res) => {
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


// router.get('/:userId', function(req, res, next) {
//     res.send(users[req.params.userId]);
//
// });
//
//
// router.post('/', function(req, res, next) {
// //var userDBId = users.length;
// //var user = req.body;
// //user.userId = userDBId;
// res.sendStatus(200);
// });
//
//
//
//


