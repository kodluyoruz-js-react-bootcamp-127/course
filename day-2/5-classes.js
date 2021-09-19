// Syntetic Sugar
class Car {
  constructor(name) {
    this.name = name;
  }
}

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayMyName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

class Community extends Person {
  constructor(name) {
    super();
    this.name = name;
  }
}

const kisi = new Person("Haci", "Simsek");
const kisi2 = new Person("Kodluyoruz", "Ekibi");

kisi.sayMyName();
// console.log(kisi2.sayMyName());

// Subclasses
const community = new Community("Kodluyoruz");
