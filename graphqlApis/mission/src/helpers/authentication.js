const jwt = require('jsonwebtoken');

function verifyToken(token, secretKey = process.env.JWT_SECRET_KEY){
    return jwt.verify(token, secretKey, function(err, decoded) {
        if(err){
            return null;
        }
        return decoded;
    });
}

const isAuthenticated = userCurrent => {
    if(userCurrent){
        return true;
    }
    throw new Error(`Unauthenticated!`);
}

const isAuthorized = (yetkililer, currentUser) => {
    if(yetkililer.includes(currentUser.yetki)){
        return true;
    }
    throw new Error(`Unauthorized!`);
}

const validateLogin = (currentUser, yetki) => {
    isAuthenticated(currentUser);
    isAuthorized(yetki, currentUser);
}

module.exports = {verifyToken, validateLogin};