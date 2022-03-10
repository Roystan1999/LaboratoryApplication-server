const userModel = require('../models/userdetails')
const sampleData = require('../models/SampleData')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
SECRET_KEY = 'ROYDS'



//Registration Logic
const register = async (req, res, next) => {
    let { name, email, password, role } = req.body
    try {
        const emailExists = await userModel.findOne({ email: email }).lean()
        if (emailExists) {
            res.status(400).json({
                error: true,
                message: "email already exists",
                data: null
            })
        } else {

            const saltrounds = 10
            const salt = await bcrypt.genSalt(saltrounds)

            const hashedPassword = await bcrypt.hash(password, salt)
            await userModel.insertMany([{
                name,
                email,
                password: hashedPassword,
                role

            }])
            res.status(200).json({
                error: false,
                message: "Registration successfull",
                data: null
            })

        }
    } catch (err) {
        res.redirect('/error')
        next(err)

    }

}

//LoginLogic
const login = async (req, res, next) => {
    let { email, password, name } = req.body

    try {
        const userData = await userModel.findOne({ email }).lean()

        if (userData) {
            let { name, role } = userData

            const isPasswordmatch = await bcrypt.compare(password, userData.password)
            if (isPasswordmatch) {

                const payload = { name, role }

                const token = await jwt.sign(payload, SECRET_KEY, {
                    expiresIn: "5h"
                })

                res.status(200).json({
                    error: false,
                    message: "login successfull",
                    data: {
                        name,
                        role,
                        token

                    }
                })
            } else {

                res.status(401).json({
                    error: true,
                    message: "Invalid Password",
                    data: null
                })
            }
        } else {
            res.status(400).json({
                error: true,
                message: "User Not Registered",
                data: null
            })
        }
    } catch (err) {
        res.redirect('/error')

        next(err)

    }


}

const samples = async (req, res, next) => {
    try {
        const samples = await sampleData.find().lean()
        res.json({
            error: false,
            message: "",
            data: samples
        })
    }
    catch (err) {
        next(err)
    }
}

const editData = async (req, res) => {
    try {
        const samples = await userModel.find().lean()
        res.json({
            error: false,
            message: "",
            data: samples
        })
    }
    catch (err) {
        next(err)
    }
}

const edituser = async (req, res, next) => {
    try {
        let { _id, name, email, role } = req.body
        await userModel.updateOne({ _id }, {
            $set: {
                name,
                email,
                role
            }
        })
        res.json({
            error: false,
            message: 'edit success',
            data: { name, email, role }
        })
    } catch (err) {
        next(err)
    }
}



module.exports = {
    register,
    login,
    samples,
    editData,
    edituser
}