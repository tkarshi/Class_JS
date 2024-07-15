class Employee {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  displayName() {
    console.log(`I am ${this.name}`);
  }
}

class Supervisor extends Employee {
  constructor(id, name, salary) {
    super(id, name);
    this.salary = salary;
  }
}

let s1 = new Supervisor(1, "Emp1", 10000);
// s1.displayName();

//Instance of operator

console.log(s1 instanceof Employee);
console.log(s1 instanceof Supervisor);
console.log(s1 instanceof Object);
console.log(s1 instanceof Array);
