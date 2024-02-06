var getRegvalue = function () {
    return 10;
};
console.log(getRegvalue());
//how to  write using arrow function
const getArrowonevalue = () => {
    return 10;
};
console.log(getArrowonevalue());
//how to write without return
const getArrowtwovalue = () => 10;
console.log(getArrowtwovalue());
//how to pass single arg
const getArrowthreevalue = m => 10 * m;
console.log(getArrowthreevalue(10));
//how to pass multiple arg
const getArrowfourvalue = (m, bonus) => 10 * m - bonus;
console.log(getArrowfourvalue(1000, 100));
