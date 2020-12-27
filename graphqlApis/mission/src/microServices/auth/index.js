const axios = require('axios').default;
const {AUTH_MICROSERVICE} = process.env;

module.exports = {
    "loginApi": `${AUTH_MICROSERVICE}/api/v1/login`,
    "userApi": `${AUTH_MICROSERVICE}/api/v1/users`,
    "currentUserApi": `${AUTH_MICROSERVICE}/api/v1/current-user`
}
