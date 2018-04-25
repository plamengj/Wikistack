const express = require('express');
const router = express.Router();
module.exports = router;
const wikiRouter = require('./wiki');
const userRouter = require('./user');

router.use('/wiki', wikiRouter);
router.use('/user', userRouter);


router.get('/', function(req, res, next) {
    res.send("hi");
})

router.post('/', function(req, res, next) {
    res.send("hi");
})