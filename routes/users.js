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


