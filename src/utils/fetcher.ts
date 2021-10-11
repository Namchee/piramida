import { request } from 'graphql-request';

/**
 * Fetcher for GraphQL requests. Used by SWR.
 *
 * @param {string} query GraphQL query request
 * @param {Record<string, unknown>} variables request variables
 * @param {string} host hostname
 * @return {Promise<T>} response wrapper
 */
export function graphQLFetcher<T>(
  query: string,
  variables?: Record<string, unknown>,
  host?: string,
): Promise<T> {
  return request(`${host || ''}/api/graphql`, query, variables);
}

/**
 * Fetcher for REST requests. Used by SWR.
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

  if (query) {
    const params = new URLSearchParams();

    for (const [key, value] of Object.entries(query)) {
      params.append(key, value);
    }

    endpoint = `${endpoint}?${params.toString()}`;
  }

  const response = await fetch(`/api/${endpoint}`);

  return response.json();
}
