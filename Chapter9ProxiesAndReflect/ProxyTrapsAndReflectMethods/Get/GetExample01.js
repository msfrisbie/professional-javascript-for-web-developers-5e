const myTarget = {};

const proxy = new Proxy(myTarget, {
  get(target, property, receiver) {
    console.log('get()');
    return Reflect.get(…...arguments)
  }
});

proxy.foo;
// get()
Return value
The return value is unrestricted.
Intercepted operations
proxy.property
proxy[property]
Object.create(proxy)[property]
Reflect.get(proxy, property, receiver)
Trap handler parameters
target: Target object
property: String key property being referenced on target object
receiver: Proxy object or object that inherits from proxy object
Trap invariants
If target.property is non-writable and non-configurable, the handler return value must match target.property.
If target.property is non-configurable and has undefined as its [[Get]] attribute, the handler return value must also be undefined.
