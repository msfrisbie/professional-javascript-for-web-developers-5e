let arr1 = [{}];
let arr2 = […...arr1];

arr1[0].foo = â€˜barâ€™;
console.log(arr2[0]);  // { foo: â€˜barâ€™ }
