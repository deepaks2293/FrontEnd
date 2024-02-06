let employee = {
    fname: "Deepak",
    lname: "Singh",
    gender: "Male"
};
let { fname, lname, gender } = employee;
console.log(fname);
console.log(lname);
console.log(gender);
//using Alias
let { fname: f, lname: l, gender: g } = employee;
console.log(f);
console.log(l);
console.log(g);
