const myTarget = {};

const proxy = new Proxy(myTarget, {
  defineProperty(target, property, descriptor) {
    console.log('defineProperty()');
    return Reflect.defineProperty(…...arguments)
  }
});

Object.defineProperty(proxy, 'foo', { value: 'bar' });
// defineProperty()

Return value
defineProperty() must return a Boolean indicating if the property was successfully defined or not. Non-Boolean return values will be coerced into a Boolean.

Intercepted operations
Object.defineProperty(proxy, property, descriptor)
Reflect.defineProperty(proxy, property, descriptor)

Trap handler parameters
target: Target object
property: String key property being referenced on target object
descriptor: Object containing optional definitions for enumerable, configurable, writable, value, get, or set

Trap invariants
If the target object is non-extensible, properties cannot be added.
If the target object has a configurable property, a non-configurable property of the same key cannot be added.
If the target object has a non-configurable property, a configurable property of the same key cannot be added.

