const router = require('express').Router()


router.get('/',(req,res, next)=>{
    
    res.render('./../views/maps/basic-map.hbs')
})





module.exports = router