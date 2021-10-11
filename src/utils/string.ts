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

/**
 * Get initial from name
 *
 * @param {string} name name
 * @return {string} initial
 */
export function getInitial(name: string): string {
  name = name.replace(/pt\./i, '');

  const brace = name.indexOf('(');

  if (brace !== -1) {
    name = name.slice(0, brace);
  }

  name = name.trim();

  return name.split(' ').map((v) => v[0]).join('');
}
