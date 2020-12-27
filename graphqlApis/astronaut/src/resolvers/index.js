const mutations = require('./mutations/Mutation');
const queries = require('./queries/Query');
const {mergeResolvers} = require('graphql-tools');

const allResolvers = [
    mutations,
    queries
]

module.exports = mergeResolvers(allResolvers);