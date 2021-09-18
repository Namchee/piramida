import { request } from 'graphql-request';

/**
 * Fetcher for GraphQL requests. Used by SWR
 *
 * @param {string} query GraphQL query request
 * @param {T} variables request variables
 * @return {Promise<T>} response wrapper
 */
export function graphQLFetcher<T extends Record<string, unknown> >(
  query: string,
  variables?: T
): Promise<T> {
  return request(`/api/graphql`, query, variables);
}

/**
 * Fetcher for REST requests. Used by SWR
 *
 * @param {string} endpoint API endpoint to be called
 * @param {Record<string, string>} query GET query string
 * @return {Promise<T>} response wrapper
 */
export async function getFetcher<T extends Record<string, unknown> >(
  endpoint: string,
  query?: Record<string, string>,
): Promise<T> {
  if (endpoint.startsWith('/')) {
    endpoint = endpoint.slice(1);
  }

  const response = await fetch(`/api/${endpoint}`);

  return response.json();
}
