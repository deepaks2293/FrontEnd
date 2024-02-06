let employee = ["Deepak","Singh","Male"];

let [fname,lname,gender] = employee

console.log(fname);
console.log(lname);
console.log(gender);

let employee_new = ["Deepak","Singh","Male"];

let [, , gender_one] = employee_new


console.log(gender_one);


let employee_two = ["Deepak","Singh","Male"];

let [fname_new, ...elements] = employee_two


console.log(fname_new);

let employee_three = ["Varsha","Singh"];

let [fname_one,lname_one,gender_two="female"] = employee_three

console.log(fname_one);
console.log(lname_one);
console.log(gender_two);