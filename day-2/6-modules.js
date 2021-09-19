// require()
const myModules = require("./modules.js");

const person = new myModules.Person("Haci", "Simsek");

console.log(person);

// ES2017 import, export (syntetic sugar)
import { Person } from "./modules"; // --> const myModules = require("./modules.js");

const person1 = new Person("Haci", "Simsek");

console.log(person1);

// Babel
