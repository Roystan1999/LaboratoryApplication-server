const express = require('express')
const UserRouter = express.Router()
const userController = require('../controller/userdetails')

//Registartion
UserRouter.post('/register', userController.register)

//Login
UserRouter.post('/login', userController.login)

UserRouter.get('/editData', userController.editData)

//userdetails
UserRouter.get('/samples', userController.samples)

UserRouter.put('/edit', userController.edituser)

module.exports = UserRouter