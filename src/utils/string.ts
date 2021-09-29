/**
 * Pretiffy URL string
 *
 * @param {string} url input URL
 * @return {string} prettified URL
 */
export function prettifyURL(url: string): string {
  if (!url.startsWith('http')) {
    url = `https://${url}`;
  }

  return url;
}
