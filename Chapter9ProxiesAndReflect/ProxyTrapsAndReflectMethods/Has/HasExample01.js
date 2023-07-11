const myTarget = {};

const proxy = new Proxy(myTarget, {
  has(target, property) {
    console.log('has()');
    return Reflect.has(…...arguments)
  }
});

'foo' in proxy;
// has()


Return value
has() must return a Boolean indicating if the property is present or not. Non-Boolean return values will be coerced into a Boolean.

Intercepted operations
property in proxy
property in Object.create(proxy)
with(proxy) {(property);}
Reflect.has(proxy, property)

Trap handler parameters
target: Target object
property: String key property being referenced on target object

Trap invariants
If an own target.property exists and is non-configurable, the handler must return true.
If an own target.property exists and the target object is non-extensible, the handler must return true.

