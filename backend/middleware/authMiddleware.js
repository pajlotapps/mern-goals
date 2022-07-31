const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next) => {
    let token

    if (
        req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')
        ) {
        try {
            //get token
            token = req.headers.authorization.split(' ')[1]

            //verify token 
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //get user from token
            req.user = await User.findById(decoded.id).select('-password')
            next()

        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Access denied')
        }
    }

    if (!token) {
        res.status(401)
        throw new Error('Access denied due to token revocation')
    }


    // const statusCode = res.statusCode ? res.statusCode : 500

    // res.status(statusCode)

    // res.json({
    //     message: err.message,
    //     stack: process.env.NODE_ENV === 'production' ? null : err.stack
    // })
})

module.exports = { protect }