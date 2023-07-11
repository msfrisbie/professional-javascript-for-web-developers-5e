const myTarget = {};

const proxy = new Proxy(myTarget, {
  setPrototypeOf(target, prototype) {
    console.log('setPrototypeOf()');
    return Reflect.setPrototypeOf(…...arguments)
  }
});

Object.setPrototypeOf(proxy, Object);
// setPrototypeOf()


Return value
setPrototypeOf() must return a Boolean indicating if the prototype assignment was successful or not. Non-Boolean return values will be coerced into a Boolean.

Intercepted operations
Object.setPrototypeOf(proxy)
Reflect.setPrototypeOf(proxy)

Trap handler parameters
target: Target object
prototype: The intended replacement prototype for target, or null if this is to be a top-level prototype

Trap invariants
If target is non-extensible, the only valid prototype parameter is the value returned from Object.getPrototypeOf(target).

