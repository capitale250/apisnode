import express from 'express'

import bodyParser from 'body-parser';

import userroutes from './routes/users.js'

import ejs from 'ejs'

import path from 'path';

import session from'express-session';



var app = express();
const port = 5000;
const __dirname=path.resolve();

app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false
  
}));
app.use(express.static('public')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', userroutes)
app.get('/',(req,res) => { 
    console.log('[Test]');
    res.render('index.ejs');
    res.send('hello capitale');
});



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');	






app.use(express.static(__dirname + '/views'));

app.use('/', userroutes)



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('File Not Found');
  
  next(e);
});

app.use(express.static(__dirname + '/views'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log('Server is started on http://127.0.0.1:'+PORT);
});
