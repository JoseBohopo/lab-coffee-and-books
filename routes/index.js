const router = require("express").Router();

const Place = require("./../models/place.model");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});


router.get("/api/places", (req, res) => {
  Place.find()
    .then((Places) => res.json(Places))
    .catch((err) => console.log("Esto es un error de json", err));
});


module.exports = router;
