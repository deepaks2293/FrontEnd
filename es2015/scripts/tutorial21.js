class Person {
    greet() { }
}
let p = new Person();
function employee() { }
employee();
console.log(typeof Person);
console.log(p.greet);
console.log(Person.prototype.greet);
console.log(p.greet === Person.prototype.greet);
// function are hoisting but class donot
employee_new();
function employee_new() { }
