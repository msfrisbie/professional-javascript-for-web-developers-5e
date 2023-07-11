function sum(num1, num2...nums) {
    console.log('Entering sum(), arguments are ${num1},${num2}');
if (nums.filter(x => typeof x !== "number").length > 0) {
    console.error("Non-number provided to sum(), returning 0");
    return 0;
  }

  if (nums.length === 0) {
    console.warn("No numbers provided");
    return 0;
  }

  console.logdebug("Before calculation");
  const result = num1 + num2nums.reduce((a, b) => a + b, 0);
  console.logdebug("After calculation");

  console.loginfo("Exiting sum()");
  return result;
}
