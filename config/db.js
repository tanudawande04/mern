const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://0.0.0.0/mern').then(() => {
    console.log("connected to database");

})

module.exports = connection;

// mongoose.connect = database se connect krne ke liye
// mongodb://