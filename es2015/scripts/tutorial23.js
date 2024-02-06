class Person {
    //Class can have only 1 constructor
    constructor(name) {
        console.log(name + " Person constructor");
    }
    //Creating method
    getID() {
        return 10;
    }
}
//HOw to inherit Person class
class Employee extends Person {
    constructor(name) {
        //Calling super to inherit constructor from Parent i.e. Person class
        super(name);
        console.log(name + " Employee Constructor");
    }
    getID() {
        return 50;
        //return super.getID();
        //this will return Employee method as if does not have any method it will call
        //Parent method but if it have than it will call local mthod 
        // To call parent method use super
    }
}
let e = new Employee("Deepak");
console.log(e.getID());
