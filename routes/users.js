let express = require('express');
let router = express.Router();
const User = require("../models/user");


router.get("/", (req, res) => {

    // User.find((err, data) => {
    //     if (err) return res.json({ success: false, error: err });
    //
    //     return res.json({ success: true, data: data });
    // });

    User.find(function(err, user) {
        if (err) throw err;

        // show the one user
        return res.json({ success: true, data: user } );
    });
});

router.get("/:id", (req, res) => {

    // get a user with ID of 5bc64abcd71db3783d7e8cb2
    User.findById(req.params.id, function(err, user) {
        if (err) throw err;

        // show the one user
        return res.json({ success: true, data: user } );
    });


});










module.exports = router;


