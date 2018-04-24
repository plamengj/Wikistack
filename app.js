var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser')
var nunjucks = require('nunjucks')
const models = require('./models');

app.engine('html', nunjucks.render)
app.set('view engine', 'html')
nunjucks.configure('views', {noCache: true});

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests

app.get('/', (req,res,next)=>{
    res.send('index')
})


models.User.sync()
.then(function () {
    console.log('User table created!');
    return models.Page.sync();
})
.then(function () {
    console.log('Page table created!');
    app.listen(3000, function () {
        console.log('Server is listening on port 3000!');
    });
})
.catch(console.error.bind(console));
// app.listen(3000, () => console.log('Example app listening on port 3000!'))
app.use(express.static('/public'));
