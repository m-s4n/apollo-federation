const axios = require('axios').default;
const {SNAP_MICROSERVICE} = process.env;

module.exports = {
    "snapsApi": `${SNAP_MICROSERVICE}/api/v1/snaps`,
    "addSnap": `${SNAP_MICROSERVICE}/api/v1/snap`
}
