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

  /*context: ({req}) => {
    console.log("onemli--->",req.headers);
  }*/
});

server.listen(APP_PORT).then(({ url }) => {
  console.log(`🚀 Astronauts Graphql service ready at ${url}`);
});
