let secret = ',3[zcuY%ZlZmbO;MN{U5GIUN(]AJ}hQ*CJhe45K^IjhkzWx#N)jT}5i@zi+s*Db)';
let express = require('express');
let consign = require('consign');
const nunjucks = require('nunjucks')
const path = require('path')
let bodyParser = require('body-parser');
let {check, validationResult} = require('express-validator/check');
let expressSession = require('express-session');
const { User } = require('../models');
let app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.set('check', check);
app.set('validationResult', validationResult);

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use("/jquery",express.static('./node_modules/jquery'));
app.use("/popper", express.static('./node_modules/popper.js'));
app.use("/bootstrap/css",express.static('./node_modules/bootstrap/dist/css'));
app.use("/css",express.static('./css'));
app.use("/js",express.static('./js'));
app.use("/images",express.static('./images'));
app.use("/bootstrap/js",express.static('./node_modules/bootstrap/dist/js'));
app.use("/icons", express.static('./node_modules/material-design-icons'))
app.use('/public', express.static('./app/public'));
app.use(expressSession({ secret: secret, cookie: { maxAge: 1200000}, resave: false, saveUninitialized: false}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));

consign()
    .include('./config/DbConnection.js')
    .then('./app/routes')
    .then('./app/controllers')
    .then('./app/models')
    .into(app);

module.exports = app;