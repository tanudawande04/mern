const express = require('express');
const morgan = require('morgan');

const app = express();
const userModel = require('./models/user');
const db = require('./config/db'); // Ensure database connection is established

// Middleware setup

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


app.get('/register', (req, res) => {
    res.render('register');

})

app.get('/get-user', async (req, res) => {
    await userModel.find({
        username: 'a'
    }).then((user) => {
        res.send(user)
    })
})

app.get('/update-user', async (req, res) => {
    await userModel.updateOne({
        username: 'duggu'
    }, {
        email: "c@c.com"
    })
    res.send("user updated")
})

app.get('/delete-user', async (req, res) => {
    await userModel.deleteOne({
        username: 'a'
    })
    res.send("user deleted")

})

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    const newUser = await userModel.create({
        username: username,
        email: email,
        password: password
    })

    res.send(newUser);

})

// GET handler for /get-from-data (optional)
// app.get('/get-from-data', (req, res) => {
//     res.send("data recived");
// });

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


// get = route ko show krega 
// post = actual route ko create krega
// middleware = function jo request or response ke beech me hota hai
// morgan = logging ke liye
// express.json = json data ko parse krne ke liye
// express.urlencoded = form data ko parse krne ke liye
// express.static = static files ko serve krne ke liye
// app.set = view engine set krne ke liye