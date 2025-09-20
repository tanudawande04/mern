// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url == '/about') {
//         res.end("this is about page")
//     }
//     if (req.url == '/profile') {
//         res.end("this us profile page")
//     }
//     if (req.url == '/') {
//         res.end("this is home page")
//     }
//     if(req.url == '/contact'){
//         res.end("this is  contact page")
//     }
// })

// server.listen(3000)



const express = require('express');
const morgan = require('morgan')

const app = express();

app.use(morgan('dev'))

app.set("view engine", 'ejs')

app.get('/', (req, res, next) => {
    console.log("this is is middle ware");   //meddileware me ham direct res send or show nahi krte hai , jb errors aaye thb hi send krte hai.
    const a = 2;
    const b = 3;
    console.log(a + b);
    next();



}, (req, res) => {
    res.render('index')


})



// app.get('/', (req, res) => {
//     res.render('index')
//     // res.send("this is home page")
// })

app.get('/about', (req, res) => {
    res.send("About page")
})

app.listen(3000)