var express = require("express");

var router = express.Router();
router.get("/", function(req,res){

    console.log("hello i'm on the start");
    res.render("index");
});

router.get('/about', (req, res) => {
    res.render('about');
   });

   router.get('/home', (req, res) => {
    res.render('home');
   });
module.exports = router;