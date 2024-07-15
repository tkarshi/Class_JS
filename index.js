// class employee {
//   constructor(name) {
//     this.name = name;
//   }
//   GetEmpName() {
//     console.log(`Emp: ${this.name}`);
//   }
// }

// let emp1 = new employee("Employee 1");
// let emp2 = new employee("Employee 2");

// emp1.GetEmpName();

let Employee1 = new (class {
  getMyName() {
    console.log("test object");
  }
})();

Employee1.getMyName();
