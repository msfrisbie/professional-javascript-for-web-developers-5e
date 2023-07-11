function divide(num1, num2) {
  return num1 / num2;
}
This simple function divides two numbers but will return NaN if either of the two arguments isn't a number. Simple calculations often cause problems in web applications when they return NaN unexpectedly. In this case, you can check that the type of each argument is a number before attempting the calculation. Consider the following example:
function divide(num1, num2) {
  if (typeof num1 != "number" || typeof num2 != "number"){
    throw new Error("divide(): Both arguments must be numbers.");
  }
  return num1 / num2;
}
