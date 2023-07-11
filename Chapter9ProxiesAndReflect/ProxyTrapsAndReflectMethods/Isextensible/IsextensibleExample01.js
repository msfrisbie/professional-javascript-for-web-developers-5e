const myTarget = {};

const proxy = new Proxy(myTarget, {
  isExtensible(target) {
    console.log('isExtensible()');
    return Reflect.isExtensible(…...arguments)
  }
});

Object.isExtensible(proxy);
// isExtensible()


Return value
isExtensible() must return a Boolean indicating if the prototype assignment was successful or not. Non-Boolean return values will be coerced into a Boolean.

Intercepted operations
Object.isExtensible(proxy)
Reflect.isExtensible(proxy)

Trap handler parameters
target: Target object

Trap invariants
If target is extensible, the handler must return true.
If target is non-extensible, the handler must return false.

