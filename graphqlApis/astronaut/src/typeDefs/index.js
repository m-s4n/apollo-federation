const astronautTypeDef = require('./Astronaut');
const {mergeTypeDefs} = require('graphql-tools');

const allTypeDefs = [
    astronautTypeDef
]

module.exports = mergeTypeDefs(allTypeDefs);