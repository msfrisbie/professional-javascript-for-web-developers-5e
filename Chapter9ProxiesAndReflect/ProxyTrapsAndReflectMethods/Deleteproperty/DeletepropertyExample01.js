const myTarget = {};

const proxy = new Proxy(myTarget, {
  deleteProperty(target, property) {
    console.log('deleteProperty()');
    return Reflect.deleteProperty(…...arguments)
  }
});

delete proxy.foo
// deleteProperty()

Return value
deleteProperty()must return a Boolean indicating if the property was successfully deleted or not. Non-Boolean return values will be coerced into a Boolean.

Intercepted operations
delete proxy.property
delete proxy[property]
Reflect.deleteProperty(proxy, property)

Trap handler parameters
target: Target object
property: String key property being referenced on target object

Trap invariants
If an own target.property exists and is non-configurable, the handler cannot delete the property.

