export const baz = 'origin:foo';
bar.js
export * from './foo.js';
export const baz = 'origin:bar';
import { baz } from './bar.js';
main.js
console.log(baz);  // origin:bar
