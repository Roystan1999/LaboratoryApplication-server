const express = require('express')
const cors = require('cors')
const app = express()
require('./database/dbconnection')
    //cors level middleware
app.use(cors())

//Reference of product url

const userRoutes = require('./routes/userdetails')
    

//Body parser middleware
app.use(express.urlencoded({ extended: true }));

//Json middleware
app.use(express.json())

//router level middleware
app.use('/users', userRoutes)
    

app.get('/error', (req, res) => {
    res.status(500).send('Something went wrong')
})


module.exports=app