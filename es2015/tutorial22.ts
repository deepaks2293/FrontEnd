//class method can have only constructor and not properties
//Class method can only have one constructor

class Person {
    //constructor method called during object creation
    constructor(name){
        this.name = name;
        console.log(this.name + " constructor");
    }
    //static method can be called directily 
    static staticMethod(){
        console.log("Hello from static method " + this.name)
    }
    //protype method can be called with each object
    greetPerson(){
        console.log("Hello from prototype " + this.name);
    }
}

let p = new Person("Deepak");
Person.staticMethod();
p.greetPerson();