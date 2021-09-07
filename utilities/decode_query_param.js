// parsing %23%20hello%20world to ! hello world
export function decodeQueryParam(p) {
  return decodeURIComponent(p.replace(/\+/g, ' '));
}