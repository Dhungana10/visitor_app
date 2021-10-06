const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const router = require('./routes/visitorRoutes');
const seedDB = require('./seed');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user'); 
const sgMail = require('@sendgrid/mail');
const API_KEY = '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';
sgMail.setApiKey(API_KEY);

const message = {
    to:'abc@gmail.com',
    from: 'xyz@gmail.com',
    subject: 'Hello from xyz',
    text: 'Hello from xyz',
    html: '<h1>Hello Sujan How are you ?</h1>',
};

sgMail.send(message)
.then(response => console.log('Email sent successfully'))
.catch(err => console.log(err.message));


mongoose.connect('mongodb://localhost:27017/seedDB')
.then(()=> console.log("DB CONNECTED"))
.catch((err)=> console.log(err));

seedDB();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));


app.get('/',(req,res)=>{
    res.send('Home Page');
});


const sessionConfig = {
    secret: 'weneedsomebettersecret',
    resave: false,
    saveUninitialized: true,
}

app.use(session(sessionConfig));
app.use(flash());

//Middlewares for passport
app.use(passport.initialize());
app.use(passport.session());

//Correct user or not
passport.use(new LocalStrategy(User.authenticate()));

//Login (enter) and Logout(exit) from the app
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user;
    next();
});

const visitorRoutes = require('./routes/visitorRoutes'); //CRUD OPERATION
const authRoutes = require('./routes/authRoutes'); //PASSPORT 
const { response } = require('express');


app.get('/error', (req, res) => {
    
    res.render('error');
});

app.use(visitorRoutes);
app.use(authRoutes);


app.listen(4000,(req,res)=>{
    console.log("Server started at port 4000!!");
});