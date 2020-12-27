require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./src/typeDefs/index");
const resolvers = require("./src/resolvers/index");
const { buildFederatedSchema } = require("@apollo/federation");

const { APP_PORT } = process.env;

const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs,
      resolvers,
    },
  ]),
});

server.listen(APP_PORT).then(({ url }) => {
  console.log(`🚀 Missions Graphql service ready at ${url}`);
});
