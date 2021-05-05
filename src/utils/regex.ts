/**
 * Escapes a string to be compatible with multiple purposes
 * by replacing some sensitive characters.
 *
 * @param {string} str input string
 * @return {string} escaped string
 */
export function escape(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
