// Array Class
let array2 = new Array(10);

// Array Literal []
let array = [1, 2, 3];
let products = [
  { id: 1, price: 10, name: "iPhone x" },
  { id: 1, price: 15, name: "iPhone 11" },
  { id: 1, price: 20, name: "iPhone 13" },
];
// array.length = 10;
// console.log(array.length);
// Sparse Array

// Template Literals
const firstName = "Enes";
const lastName = "Ozturk";
const fullname = firstName + " " + lastName; // Enes Ozturk
// Backtick
const fullname2 = `${firstName} ${lastName}`; // Enes Ozturk

// Iterating arrays
array.forEach((element, index) => {
  //   console.log(`Element: ${element}, index of it: ${index}`);
});

// Map
const newArray = array.map((element, index) => {
  return element * 2;
});
// //console.log(newArray);

// Filter
const filteredArray = array.filter((element, index) => {
  return element % 2 == 0;
});
// //console.log(filteredArray);

// Reduce
const sum = products.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.price;
}, 0);
// //console.log(sum);

// Add, delete (from end)
// array.push(4); // [1,2,3,4]
// array.push(5, 6, 7, 8, 9); // [1,2,3,4]
// array.pop();
// array.pop();
// array.pop();

// console.log(array);

// // from start
// array.unshift(0);
// array.shift();
// console.log(array);

// Spead Operator (...)
const newArray2 = [...array];
const newArray3 = array;

// Adding new element with spread operator - anti pattern
array = [...array, 4, 5, 6, "Deneme"];
// console.log(array);

// Index methos
const indexOfDeneme = array.findIndex((element) => {
  return element === "Deneme";
});
// console.log(indexOfDeneme);

// array.splice(3, 0, "Kodluyoruz");
// console.log(array);

// array.slice(0, 3);
array = array.slice(2, 5);
console.log(array);
