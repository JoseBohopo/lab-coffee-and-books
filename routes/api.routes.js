const router = require("express").Router();

const Place = require("./../models/place.model");

router.get("/json", (req, res) => {
    Place.find()
      .then((Places) => res.json(Places))
      .catch((err) => console.log("Esto es un error de json", err));
  });
  
  

module.exports = router;
