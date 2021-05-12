
const { sign, verify } = require('jsonwebtoken');

const app = require('express')();


// destructure the fn sign and verify from jwt
// use sign method to make a token from the username and password from the req body

const jwt_token = process.env.JWT_TOKEN

// takes user a arg => this user arg will the req.body
const token = (user) => {
    const grantAccessToken = sign({
        id: user.id, username: user.username
    }, process.env.JWT_TOKEN);

    return grantAccessToken
}

// Validiate the token

const validiateToken = (req, res, next) => {
    const accessToken = req.cookies["access-token"];
    console.log(accessToken)

    // if the cookie isn't validiate FRO RIGHT NOW send an error
    if(!accessToken) return res.status(404).json({ error: 'Access Denied!' });

    try {

        // validate the token and use out ENV token 
        // if true then can auth and set it's bool to true 
        
        const validToken = verify(accessToken, process.env.JWT_TOKEN);
        console.log(process.env.JWT_TOKEN)
        console.log(': ', validToken)

        if(validToken) {
            req.authenticated = true
            return next()
        }

    } catch(err) {
        // generic /  indicates that the server cannot or will not process the request due to something that is perceived to be a client error
        return res.status(400).json({ error: err })
    }


}

module.exports = {
    token,
    validiateToken
}