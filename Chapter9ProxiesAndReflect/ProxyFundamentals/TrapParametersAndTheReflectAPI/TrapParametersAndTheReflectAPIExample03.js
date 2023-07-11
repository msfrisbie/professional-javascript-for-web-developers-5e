const target = {
  foo: 'bar'
};

const handler = {
  get() {
    return Reflect.get(…...arguments);
  }
};

const proxy = new Proxy(target, handler);

console.log(proxy.foo);   // bar
console.log(target.foo);  // bar
