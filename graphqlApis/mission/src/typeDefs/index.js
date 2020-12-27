const missionTypeDef = require('./Mission');
const {mergeTypeDefs} = require('graphql-tools');

const allTypeDefs = [
    missionTypeDef
]

module.exports = mergeTypeDefs(allTypeDefs);