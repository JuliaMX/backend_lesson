let express = require('express');
let router = express.Router();
const Pet = require("../models/pet");

router.get("/", (req, res) => {


    Pet.find(function(err, pet) {


        if (err) return res.json({ success: false, error: err });

        return res.json({ success: true, data: pet });
    });
});

router.get("/:id", (req, res) => {

    Pet.findById(req.params.id, function(err, pet) {

        if (err) return res.json({ success: false, error: err });

        return res.json({ success: true, data: pet });
    });


});


router.post("/", (req, res) => {

    console.log(req.body.toString());
    let pet = new Pet();

    pet.name = req.body.name;
    pet.type = req.body.type;

    pet.save(function(err) {

        if (err) return res.json({ success: false, error: err });

        return res.json({ success: true });


    });

});


router.put("/:id", (req, res) => {

    Pet.findByIdAndUpdate(req.params.id, req.body, function(err) {

        if (err) return res.json({ success: false, error: err });

        return res.json({ success: true });
    });


});


router.delete("/:id", (req, res) => {

    Pet.findByIdAndDelete(req.params.id, function(err) {

        if (err) return res.json({ success: false, error: err });

        return res.json({ success: true });
    });


});


module.exports = router;


