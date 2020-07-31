import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';

import typeDefs from './schema/schema';
import resolvers from './schema/resolvers';
import bodyParser from 'body-parser';

dotenv.config();
const PORT = process.env.PORT || 3000;
const CLIENT = process.env.CLIENT || 'http://localhost:8000';
const DB = process.env.STORAGE_URL;
const AUTH_KEY = process.env.AUTH_KEY || "NO_AUTH_KEY_PROVIDED";
const AUTH_SECRET = process.env.AUTH_SECRET || "NO_AUTH_SECRET_PROVIDED";

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: CLIENT,
}));
mongoose.Promise = global.Promise;

mongoose.connect(DB, { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${DB}`));

app.post('/login', (req, res) => {
  const { body } = req;
  console.log(body);
  if(body && body.auth && body.auth === AUTH_KEY) {
    res.status(200).send(jwt.sign({ key: AUTH_KEY }, AUTH_SECRET));
  } else {
    res.status(401).send({error : 'Invalid password'});
  }
});

const context = exp => ({
  req: exp.Request,
  res: exp.Response
});

const server = new ApolloServer({ typeDefs, resolvers, context });

server.applyMiddleware({ app });

app.listen({ port: PORT }, () => {
    console.log(`Server ready at http://localhost:3000${server.graphqlPath}`);
});