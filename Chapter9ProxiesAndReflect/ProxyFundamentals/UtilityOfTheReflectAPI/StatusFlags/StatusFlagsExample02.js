// Refactored code

const o = {};

if(Reflect.defineProperty(o, 'foo', {value: 'bar'})) {
  console.log('success');
} else {
  console.log('failure');
}
