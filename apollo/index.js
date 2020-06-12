const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
import typeDefs from './schema/schema';
import resolvers from './schema/resolvers';

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

const PORT = process.env.PORT || 3000;
app.listen({ port: PORT }, () => {
    console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`);
})