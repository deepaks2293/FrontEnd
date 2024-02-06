function greetPerson_let(name){
    let greet;
    if (name == 'Sheldon') {
        greet = "Hello Sheldon"
    } else {
        greet = "Hello there"
    }
    console.log(greet)
}

greetPerson_let('Sheldon')

var a=1;
var b =5;

if (a === 1) {
    var a = 10;
    let b = 2;
    console.log(a);
    console.log(b);
}

console.log(a);
console.log(b);

//var are hosting means they can be drclared anywhere and called
//while let cannot be call anywhere they are within block
