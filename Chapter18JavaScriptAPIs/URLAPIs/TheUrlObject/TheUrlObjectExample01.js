const baseURL = new URL('https://example.com/base/path/');
const relativeURL = new URL('relative/path', baseURL);

console.log(relativeURL.toString());
// https://example.com/base/path/relative/path
