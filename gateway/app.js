require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const { ApolloGateway, RemoteGraphQLDataSource } = require('@apollo/gateway');

// Initialize an ApolloGateway instance and pass it an array of
// your implementing service names and URLs
const {APP_PORT} = process.env;

class AuthenticatedDataSource extends RemoteGraphQLDataSource {
  willSendRequest({ request, context }) {
    // Pass the user's id from the context to underlying services
    // as a header called `user-id`
    request.http.headers.set('user-id', context.userId);
  }
}

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'astronauts', url: 'http://localhost:4000' },
    { name: 'missions', url: 'http://localhost:4001' },
    // Define additional services here
  ],
  buildService({ name, url }) {
    return new AuthenticatedDataSource({ url });
  }
});

// Pass the ApolloGateway to the ApolloServer constructor
const server = new ApolloServer({
  gateway,
  // Disable subscriptions (not currently supported with ApolloGateway)
  subscriptions: false,
  context: ({ req }) => {
    // Get the user token from the headers
    const token = req.headers.authorization || '';
    // Try to retrieve a user with the token
    const userId = 5;
    // Add the user ID to the context
    return { userId };
  }
});

server.listen(APP_PORT).then(({ url }) => {
  console.log(`🚀 GraphQL gateway server ready at ${url}`);
});
