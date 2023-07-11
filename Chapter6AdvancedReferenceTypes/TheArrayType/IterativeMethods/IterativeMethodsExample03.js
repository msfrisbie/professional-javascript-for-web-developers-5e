let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

let mapResult = numbers.map((item, index, array) => item * 2);

alert(mapResult);   // [2,4,6,8,10,8,6,4,2]
The code in this example returns an array containing the result of multiplying each number by two. This method is helpful when creating arrays whose items correspond to one another.
