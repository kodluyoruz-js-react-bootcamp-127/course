// Array Literal []
let array = [1, 2, 3];

// Reduce
let sum = array.reduce((accumulator, b) => accumulator + b);
// (1, 2) => 3
// (3 + 3) => 6
// = 6
console.log(sum);

// ForEach
let sum1 = 0;
array.forEach((item) => {
  sum1 += item;
});

console.log(sum1);

// Map
const newArray = array.map((item) => {
  return item * 2;
});

console.log(newArray);
