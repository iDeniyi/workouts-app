require('dotenv').config()  // dotenv is a package that loads environmet variables from a .env file into a process.env object available in a nodeJs environment

const mongoose = require('mongoose')
const express = require('express')  // express is a node js framework used for making APIs
const cors = require('cors')
const workoutRoutes = require('./routes/workoutRoutes')

const app = express()   // start the express app

const port = process.env.PORT || 4001

// middleware refers to any function that execute between getting a request and sending the response

// middleware to get access to data sent in the request object, simply using request.body
app.use(express.json())

app.use(cors())

// basic custom middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()  // necessary so that the next  middleware is called
})

// routes
app.use('/api/v1/workouts', workoutRoutes)

// connect to the database
// oinly listen for requests after the connection with the database has been established
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })


