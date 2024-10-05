//   Q )  Since Math.PI = 3.14 , So can we change value of the pi ?

// Ans => We cannot override value of PI
 
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// getOwnPropertyDescriptor => tells us about the hidden propties of object( Object_name , property_name) 


// console.log(descripter);

// console.log(Math.PI);      = > 3.145
// Math.PI = 5
// console.log(Math.PI);      = > 3.145

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// defineProperty   =>  used to modify or change property of a object
// ( Object_name , property_name , {} // change property_value)
// enumerable = false means cannot iterate value of Object
Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// to traverse all properties of Object
// Object.entries  => get  access of all elements inside Object 
for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        // if condition used so that we don't get error as in case we access only the key value pair So if we have a function inside any object so that get error sometimes so avoid it by use of condition 
        
        console.log(`${key} : ${value}`);
    }
}