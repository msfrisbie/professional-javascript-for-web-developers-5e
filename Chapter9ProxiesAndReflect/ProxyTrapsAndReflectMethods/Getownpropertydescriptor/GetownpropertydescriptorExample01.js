const myTarget = {};

const proxy = new Proxy(myTarget, {
  getOwnPropertyDescriptor(target, property) {
    console.log('getOwnPropertyDescriptor()');
    return Reflect.getOwnPropertyDescriptor(…...arguments)
  }
});

Object.getOwnPropertyDescriptor(proxy, 'foo');
// getOwnPropertyDescriptor()

Return value
getOwnPropertyDescriptor() must return an object, or undefined if the property does not exist.

Intercepted operations
Object.getOwnPropertyDescriptor(proxy, property)
Reflect.getOwnPropertyDescriptor(proxy, property)

Trap handler parameters
target: Target object
property: String key property being referenced on target object

Trap invariants
If an own target.property exists and is non-configurable, the handler must return an object to indicate that the property exists.
If an own target.property exists and is configurable, the handler cannot return an object indicating that the property is configurable.
If an own target.property exists and target is non-extensible, the handler must return an object to indicate that the property exists.
If target.property does not exist and target is non-extensible, the handler must return undefined to indicate that the property does not exist.
If target.property does not exist, the handler cannot return an object indicating that the property is configurable.

