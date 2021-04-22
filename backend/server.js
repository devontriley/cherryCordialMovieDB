const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

const users = require('./routes/users');

const app = express();

app.use(cors());

// Bodyparser middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose.connect(
    db,
    {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('MongoDB database connection established successfully!'))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Routes
app.use('/users/', users);

const port = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'production')
{
    app.use(express.static(path.join(__dirname, '/client/build')))
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});