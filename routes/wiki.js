const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {
    res.send("hi");
})

router.post('/', function(req, res, next) {
    res.send("hi");
})

router.get('/add', function(req, res, next) {
    res.send("hi");
})


module.exports = router;