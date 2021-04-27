import { request } from 'graphql-request';

export const graphQLFetcher = (query: string) => request(
  `${process.env.NEXT_PUBLIC_API_HOST}:${process.env.NEXT_PUBLIC_API_PORT}/${process.env.NEXT_PUBLIC_API_ENDPOINT}/graphql`,
  query,
);
