const jwt = require('jsonwebtoken')

//authorize user or admin
const authorizeUserAdmin = async(req, res, next) => {
    console.log(req.headers['authorization']);
    //gttn from fe to be
    if (req.headers['authorization']) {
        //bearer token= bearer is 0 index index 1 is token
        const token = req.headers['authorization'].split(' ')[1]


        const payload = await jwt.verify(token, SECRET_KEY = 'ROYDS')
        if (payload.role === 'user' || payload.role === 'admin') {
            //next() will take to next middleware
            //to apply middleware to apply in productroutes
            next()
        } else {
            res.status(401).json({
                error: true,
                message: "Not Authorized",
                data: null
            })
        }
    }

}

//only admin
const authorizeAdmin = async(req, res, next) => {
    if (req.headers['authorization']) {
        //bearer token= bearer is 0 index [1] is token
        const token = req.headers['authorization'].split(' ')[1]

        //need payload to act upon role
        const payload = await jwt.verify(token, SECRET_KEY)
        if (payload.role === 'admin') {
            //it will take to next middleware
            //to apply middleware to apply in productroutes
            next()
        } else {
            res.status(401).json({
                error: true,
                message: "Not Authorized",
                data: null
            })
        }
    }

}

module.exports = {
    authorizeAdmin,
    authorizeUserAdmin
}