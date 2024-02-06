let firstnameone = "Deepak";
let lastnameone = "Singh";
let personone = {
    firstnameone: firstnameone,
    lastnameone: lastnameone
};
console.log(personone.firstnameone);
console.log(personone.lastnameone);
//Above work in normal JS but using ES6 it can be done 
let persontwo = {
    firstnameone,
    lastnameone
};
console.log(personone.firstnameone);
console.log(personone.lastnameone);
//OR function can be used with method
function createPerson(firstnameone, lastnameone, age) {
    let fullname = firstnameone + " " + lastnameone;
    return {
        firstnameone,
        lastnameone,
        fullname,
        isSenior: function () {
            return age > 60;
        }
    };
}
;
let p = createPerson("Manish", "Singh", "26");
console.log(p.firstnameone);
console.log(p.lastnameone);
console.log(p.fullname);
console.log(p.isSenior());
//Same can be done using Object letral
function createPersonone(firstnameone, lastnameone, age) {
    let fullname = firstnameone + " " + lastnameone;
    return {
        firstnameone,
        lastnameone,
        fullname,
        isSenior() {
            return age > 60;
        }
    };
}
;
let p_ = createPersonone("Manish", "Singh", "70");
console.log(p_.firstnameone);
console.log(p_.lastnameone);
console.log(p_.fullname);
console.log(p_.isSenior());
