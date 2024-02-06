let displayColor = function(){
    console.log(message_one);
    for (let i in arguments){
        console.log(arguments[i])
    };
};

let message_one = "List of colors";

displayColor(message_one,'Red');
displayColor(message_one,'Red','Blue');
displayColor(message_one,'Red','Blue','Orange');

//Above function has no arguments yet it works but it prints all arguments with message
// We want something that message and colors should be considered diffrent like list of arguments


let displayColor_new = function(message, ...colors){
    console.log(message);
    console.log(colors)
    for (let i in colors){
        console.log(colors[i])
    };
};

let message = "List of colors";

displayColor_new(message,'Red');
displayColor_new(message,'Red','Blue');
displayColor_new(message,'Red','Blue','Orange');