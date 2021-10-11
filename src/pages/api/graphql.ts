import { ApolloServer } from 'apollo-server-micro';

import { typeDefs } from 'scrapper/graphql/type-defs';
import { resolvers } from 'scrapper/graphql/resolver';
import { NextApiRequest, NextApiResponse } from 'next';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  debug: false,
  introspection: true,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const start = server.start();

/**
 * Starts the GraphQL server
 *
 * @param {NextApiRequest} req request object
 * @param {NextApiResponse }res response object
 * @return {void}
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void | boolean> {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  await start;
  await server.createHandler({ path: '/api/graphql' })(req, res);
}
