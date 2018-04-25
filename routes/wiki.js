const express = require('express');
const router = express.Router();
module.exports = router;
const models = require('../models');
const Page = models.Page; 
const User = models.User; 

router.get('/', function(req, res, next) {
    res.redirect('/');
})

// router.post('/', function(req, res, next) {
//     res.send("hi");
// })

router.get('/add', function(req, res, next) {
    res.render('addpage', );
})



router.post('/', function(req, res, next) {
    const page = Page.build({
        title: req.body.title,  
        content: req.body.content 
    })
    page.save(); 
    res.json(page); 
})

router.get('/:urlTitle/', function(req, res, next) {
    res.send(req.params.urlTitle)
})

