const myTarget = {};

const proxy = new Proxy(myTarget, {
  getPrototypeOf(target) {
    console.log('getPrototypeOf()');
    return Reflect.getPrototypeOf(…...arguments)
  }
});

Object.getPrototypeOf(proxy);
// getPrototypeOf()

Return value
getPrototypeOf() must return an object or null.

Intercepted operations
Object.getPrototypeOf(proxy)
Reflect.getPrototypeOf(proxy)
proxy.__proto__
Object.prototype.isPrototypeOf(proxy)
proxy instanceof Object

Trap handler parameters
target: Target object

Trap invariants
If target is non-extensible, the only valid return value of Object.getPrototypeOf(proxy) is the value returned from Object.getPrototypeOf(target).

