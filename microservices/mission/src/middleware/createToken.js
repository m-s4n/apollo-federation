const jwt = require('jsonwebtoken');

function createToken(payload, secretKey = process.env.JWT_SECRET_KEY){
    return jwt.sign(payload,secretKey,{expiresIn:120});
}

function getCurrentUserId(token){
    return (jwt.decode(token)).id;
}

module.exports = {createToken, getCurrentUserId};