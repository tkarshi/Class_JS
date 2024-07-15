class Student {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  get StudentID() {
    return this.id;
  }

  set StudentID(id) {
    this.id = id;
  }
}

let s1 = new Student(1, "student");
console.log(s1.StudentID);
