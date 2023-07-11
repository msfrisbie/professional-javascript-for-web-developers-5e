const myTarget = {};

const proxy = new Proxy(myTarget, {
  ownKeys(target) {
    console.log('ownKeys()');
    return Reflect.ownKeys(…...arguments)
  }
});

Object.keys(proxy);
// ownKeys()


Return value
ownKeys() must return an enumerable object that contains either strings or symbols.

Intercepted operations
Object.getOwnPropertyNames(proxy)
Object.getOwnPropertySymbols(proxy)
Object.keys(proxy)
Reflect.ownKeys(proxy)

Trap handler parameters
target: Target object

Trap invariants
The returned enumerable object must contain all non-configurable own properties of target.
If target is non-extensible, the returned enumerable object must exactly contain the own property keys of target.

