const myTarget = () => {};

const proxy = new Proxy(myTarget, {
  apply(target, thisArg, …...argumentsList) {
    console.log('apply()');
    return Reflect.apply(…...arguments)
  }
});

proxy();
// apply()


Return value
The return value is unrestricted.

Intercepted operations
proxy(…...argumentsList)
Function.prototype.apply(thisArg, argumentsList)
Function.prototype.call(thisArg, …...argumentsList)
Reflect.apply(target, thisArgument, argumentsList)

Trap handler parameters
target: Target object
thisArg: this argument for the function call
argumentsList: List of arguments for the function call

Trap invariants
target must be a function object.
