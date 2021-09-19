const communityName = "Kodluyoruz";

const sayMyName = () => {
  console.log("Kodluyoruz");
};

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayMyName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

module.exports = {
  communityName,
  sayMyName,
  Person,
};
