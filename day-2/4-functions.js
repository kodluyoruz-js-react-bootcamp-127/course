// console.log(sayMyName2("Enes", "Ozturk"));

// Function Declaration - Named function
function sayMyName(firstName, lastName) {
  console.log(`${firstName} ${lastName}`);
  return { firstName: firstName, lastName };
}

// Function Expression - unnamed/anonymous function
const sayMyName2 = function (firstName, lastName) {
  console.log(`${firstName} ${lastName}`);
};

// Regular Invocation
console.log(sayMyName("Enes", "Ozturk"));

// Hoisting (Hoist edilmek) *******
// var, let, const
// console.log(isim);
// var isim = "Enes";

// function car(model, doorCount) {
//   let c = Object.create({});

//   c.model = model;
//   c.doorCount = doorCount;

//   return c;
// }

// const car1 = car("2020", 4);
// const car2 = car("2021", 5);
// console.log(car1);
// console.log(car2);

function Car(model, doorCount) {
  this.model = model;
  this.doorCount = doorCount;
}

// Naming Convention (start wiht uppercase)
// Constructor Invocation
const car1 = new Car("2020", 4);
const car2 = new Car("2021", 5);
console.log(car1);
console.log(car2);

console.log(car1 instanceof Car);
