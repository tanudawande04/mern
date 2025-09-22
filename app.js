const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set("view engine", 'ejs');

// Home route with middleware
app.get('/', (req, res, next) => {
    //meddileware me ham direct res send or show nahi krte hai , jb errors aaye thb hi send krte hai
    console.log("this is is middle ware");
    next();
}, (req, res) => {
    res.render('index');
});

// About route
app.get('/about', (req, res) => {
    res.send("About page");
});

// GET handler for /get-from-data (optional)
app.get('/get-from-data', (req, res) => {
    res.send("data recived");
});

// POST handler for /get-from-data
app.post('/get-from-data', (req, res) => {
    console.log(req.body);
    res.send("data received");
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

// post = fronten se server tk data le jane ke liye..
// get = server se frontend pe data le jaane ke