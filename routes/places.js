const router = require("express").Router();

const Place = require("./../models/place.model");

router.get("/", (req, res) => {
  res.render("./../views/places/home-places");
});

router.post("/", (req, res) => {
  const { name, type, lat, lng } = req.body;

  const location = { type: "Point", coordinates: [lat, lng], };

  Place.create({ name, type, location })
    .then((newPlace) => {
      res.redirect("/places");
      console.log("EL nuevo lugar es", newPlace);
    })
    .catch((err) => console.log("error al crear el lugar", err));
});

router.get("/list", (req, res) => {
  Place
    .find()
    .then((Places) =>{
      
        res.render("./../views/places/list-places.hbs", { Places })
    })
    .catch((err) => console.log("error de busqueda de lugares", err));
});

router.get('/list/:id',(req,res)=>{
    const {id} = req.params
  console.log('esto es req query', req.query)
    Place
        .findById(id)
        .then(response => res.render('places/edit-place', {response}))
        .catch(err => console.log('Esto es un error de list edit',err))
   })

router.get('/delete/:id',(req,res)=>{
    res.send(req.params)
})

module.exports = router;
