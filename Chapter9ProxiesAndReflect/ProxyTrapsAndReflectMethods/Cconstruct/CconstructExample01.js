Const myTarget = function() {};

const proxy = new Proxy(myTarget, {
  construct(target, argumentsList, newTarget) {
    console.log('‘construct()'’);
    return Reflect.construct(…...arguments)
  }
});

new proxy;
// construct()


Return value
construct() must return an object.
Intercepted operations
new proxy(…...argumentsList)
Reflect.construct(target, argumentsList, newTarget)
Trap handler parameters
target: Target constructor
argumentsList: List of arguments passed to the target constructor
newTarget: The originally called constructor

Trap invariants
target must be able to be used as a constructor.

