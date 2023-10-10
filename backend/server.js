require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const jobRoutes = require('./routes/jobs')



const app = express()    //express app

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/jobs', jobRoutes)   //routes

mongoose.connect(process.env.MONGO_URI)    //connect to database
    .then(() => {
        app.listen(process.env.PORT, () => {           //listen for requests
            console.log('connected to db & listening on port', process.env.PORT)
        })

    })
    .catch((error) => {
        console.log(error)
    })

