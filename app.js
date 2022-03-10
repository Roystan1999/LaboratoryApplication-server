const express = require('express')
const cors = require('cors')
const app = express()
const logger = require('./config/logger.js')
require('./database/dbconnection')

//cors level middleware
app.use(cors())
bn
//Reference of product url

const userRoutes = require('./routes/userdetails')


//Body parser middleware
app.use(express.urlencoded({ extended: true }));

//Json middleware
app.use(express.json())

//router level middleware
app.use('/users', userRoutes)


app.use('/error', ((err, req, res, next) => {
   const response= res.status(500).json({
        error: true,
        message: err.message,
        data: null,

    })
    logger.error(response)
}))


module.exports = app