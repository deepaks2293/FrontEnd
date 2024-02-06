var employee = {
    id: 1,
    greet: function(){
        console.log("hello employee " + this.id );  
    }
};


employee.greet();

//Calling Set timeout

var employee = {
    id: 1,
    greet: function(){
        setTimeout(function(){console.log("hello employee " + this.id )},1000);  
    }
};


employee.greet();

// in above this does not work as this is created by settimeout function but not called from above

// Using another variable in greet function we can concquer this
var employee = {
    id: 1,
    greet: function(){
        var self = this
        setTimeout(function(){console.log("hello employee " + self.id )},1000);  
    }
};


employee.greet();

// In ES6 same can be concqured using arrow function as it doesnot create it own this

var employee = {
    id: 1,
    greet: function(){
        var self = this
        setTimeout(() => {console.log("hello employee " + self.id )},1000);  
    }
};


employee.greet();

