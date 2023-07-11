Const myTarget = {};

const proxy = new Proxy(myTarget, {
  preventExtensions(target) {
    console.log('‘preventExtensions()'’);
    return Reflect.preventExtensions(…...arguments)
  }
});

Object.preventExtensions(proxy);
// preventExtensions()


Return value
preventExtensions() must return a Boolean indicating if target is already non-extensible. Non-Boolean return values will be coerced into a Boolean.

Intercepted operations
Object.preventExtensions(proxy)
Reflect.preventExtensions(proxy)

Trap handler parameters
target: Target object

Trap invariants
If Object.isExtensible(proxy) is false, the handler must return true.

