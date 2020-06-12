import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer, gql } from 'apollo-server-express';

import typeDefs from './schema/schema';
import resolvers from './schema/resolvers';

const app = express();
mongoose.Promise = global.Promise;

mongoose.connect(process.env.STORAGE_URL, { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${process.env.STORAGE_URL}`));

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

const PORT = process.env.PORT || 3000;
app.listen({ port: PORT }, () => {
    console.log(`Server ready at http://localhost:3000${server.graphqlPath}`);
});