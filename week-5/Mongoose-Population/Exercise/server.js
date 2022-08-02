const express = require('express')
const app = express()
const Queries = require("./server/models/Queries");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/solarSystemDB', { useNewUrlParser: true })

const port = 3000
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})