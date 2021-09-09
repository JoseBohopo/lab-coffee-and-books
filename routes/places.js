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
      
        res.render("./../views/places/list-places", { Places })
    })
    .catch((err) => console.log("error de busqueda de lugares", err));
});

router.get('/list/:id',(req,res)=>{
    const {id} = req.params
  console.log('eeeeeeeeeeeeeeeeeeeesto es req params', req.params)
    Place
        .findById(id)
        .then(response => {
          console.log('estoy vivo')
          res.render('places/edit-place', {response})})
        .catch(err => console.log('Esto es un error de list edit',err))
   })

router.get('/delete/:id',(req,res)=>{
    const {id} = req.params

    
    Place
     .findByIdAndDelete(id)
     .then(removedPlace =>{
      res.redirect('/places/list') 
      console.log('El perro eliminado es:', removedPlace)})
     .catch(err => console.log('Hubo un error:', err))

})

module.exports = router;
