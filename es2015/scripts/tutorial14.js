// We want something that message and colors should be considered diffrent like list of arguments
let displayColor_new = function (message, ...colors) {
    console.log(message);
    console.log(colors);
    for (let i in colors) {
        console.log(colors[i]);
    }
    ;
};
let message = "List of colors";
displayColor_new(message, 'Red');
displayColor_new(message, 'Red', 'Blue');
displayColor_new(message, 'Red', 'Blue', 'Orange');
//Above example is rest opreator we need spread opreator now
// Rest opreator take indivual element but spread take list of elements
let displayColor_spread = function (message, ...colors) {
    console.log(message_spread);
    console.log(colors);
    for (let i in colors) {
        console.log(colors[i]);
    }
    ;
};
let message_spread = "List of colors";
let colorArray = ['Orange', 'White', 'DarkBlue', 'Green'];
displayColor_spread(message_spread, ...colorArray);
