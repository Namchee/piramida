import { request } from 'graphql-request';

export function graphQLFetcher<T extends Record<string, any> >(query: string, variables?: T) {
  return request(
    `${process.env.NEXT_PUBLIC_API_HOST}:${process.env.NEXT_PUBLIC_API_PORT}/${process.env.NEXT_PUBLIC_API_ENDPOINT}/graphql`,
    query,
    variables,
  );
};
