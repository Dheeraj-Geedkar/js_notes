// let myName = "hitesh"
// console.log(myName.length);          => 6

// let myName = "hitesh     "
// console.log(myName.length);          => 11

// let myName = "hitesh     "
// console.log(myName.trim().length);          => 6

// let myName = "hitesh     "
// console.log(myName.trueLength);          => error

// let mychannel = "chai     "
// console.log(myName.trueLength);      => error


// So our goal is to create our own method or proprty which we can use like 'trueLength'
let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// So we need to create a method named as 'hitesh' in out object but it is not present . We have to inject it into object by below methods . Here since all things in JS are object So we inject property in Object so accessed by all by  use of 'prototype'

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

// heroPower.hitesh() 
// o/p => hitesh is present in all objects

// myHeros.hitesh() 
// o/p => hitesh is present in all objects

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}


// myHeros.heyHitesh()  => Hitesh says hello
// heroPower.heyHitesh() => error 

// As here method heyHitesh() is defined for only Array only So it will not accessed to the object 
// As array , fuction , string are child of Object 


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User  // old syntax of inheritance

// modern syntax of inheritance
Object.setPrototypeOf(TeachingSupport, Teacher)
                   //( can access  , of )
                  // ( child , parent )

// create true length() for String 
let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
// o/p => ChaiAurCode
//        True length is: 11

"hitesh".trueLength()
// o/p => hitesh
//        True length is: 6

"iceTea".trueLength()
// o/p => iceTea
//        True length is: 6
