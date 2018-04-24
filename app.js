var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser')
var nunjucks = require('nunjucks')


app.engine('html', nunjucks.render)
app.set('view engine', 'html')
nunjucks.configure('views', {noCache: true});

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests

app.get('/', (req,res,next)=>{
    res.send('index')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
app.use(express.static('/public'));
