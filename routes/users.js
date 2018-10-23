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

        // if (err) throw err;
        //
        // return res.json({ success: true, data: user } );

        if (err) return res.json({ success: false, error: err });

        return res.json({ success: true, data: user });
    });
});

router.get("/:id", (req, res) => {

    User.findById(req.params.id, function(err, user) {

        if (err) return res.json({ success: false, error: err });

        return res.json({ success: true, data: user });
    });


});


router.post("/", (req, res) => {

    let user = new User();

    user.name = req.body.name;
    user.age = req.body.age;

    user.save(function(err) {

        if (err) return res.json({ success: false, error: err });

        return res.json({ success: true });


    });

});


router.put("/:id", (req, res) => {

    User.findByIdAndUpdate(req.params.id, req.body, function(err) {

        if (err) return res.json({ success: false, error: err });

        return res.json({ success: true });
    });


});


router.delete("/:id", (req, res) => {

    User.findByIdAndDelete(req.params.id, function(err) {

        if (err) return res.json({ success: false, error: err });

        return res.json({ success: true });
    });


});


module.exports = router;


