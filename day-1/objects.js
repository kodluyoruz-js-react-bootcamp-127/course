// String
const name = "1";

// Object Literal
// Not an immutable
const araba = {
  // Property
  color: 0,
  brand: "Renault",
  length: 5.3,
  isDriving: false,
  wheelCount: 4,
  drive: function () {
    this.isDriving = true;
    console.log("I drive!", this.isDriving);
  },
  otherSpec: {
    year: 2016,
  },
  // lights: {}
};

// Function invocation
araba.drive(araba);

araba.brand = "Mercedes";

// Scope - This

// Property Access
console.log(araba.brand);
console.log(araba["brand"]);

// Optional Propery Access -> ?.
console.log(araba.color); // undefined
// console.log(araba.lights.light1); // Error
console.log(araba?.lights?.light1); // undefined

if (araba.lights) {
  console.log(araga.lights.light1);
}

// Ternary Operator x ? y : z
console.log(
  araba.brand == "Mercedes"
    ? console.log("Evet o Mercedes")
    : console.log("Hayır o Renault")
);

// // Truthy
// 123
// "1343"
// []
// {}

// // Falsy
// null
// undefined
// 0
// -1

// Deleting Properties

delete araba.color;

console.log(araba.color);
