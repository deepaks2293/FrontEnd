let getValue = function (value) {
    console.log(value);
};
getValue();
// It gives undefined as no value passed but in ES6 we can give default value
let getValueone = function (value = 10, bonus = 20) {
    console.log(value + bonus);
};
getValueone(10, 20);
// We can pass value to bonus but NOTE we can't pass bonus to value it work in lookahead only
let getValuetwo = function (value = 10, bonus = value * 20) {
    console.log(value + bonus);
};
getValuetwo(10);
//We can pass function too 
let valfun = () => 100;
let getValuethree = function (value = 10, bonus = valfun() * 20) {
    console.log(value + bonus);
    console.log(arguments.length);
};
getValuethree(10);
