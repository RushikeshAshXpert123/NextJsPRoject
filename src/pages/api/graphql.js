import { ApolloServer } from 'apollo-server-micro';
import { typeDefs } from '../../graphql/schema';
import { resolvers } from '../../graphql/resolvers';

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

// Cache the server start promise to avoid starting it multiple times
let serverStartPromise = null;

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end();
    return;
  }
  
  // Start the Apollo Server if it hasn't been started already
  if (!serverStartPromise) {
    serverStartPromise = apolloServer.start();
  }
  await serverStartPromise;
  
  // Create the handler and pass the request to it
  return apolloServer.createHandler({ path: '/api/graphql' })(req, res);
}
