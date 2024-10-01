const user = {              // Object Literal   
    username: "hitesh",          
    loginCount: 8,            //  Properties of object
    signedIn: true,

    getUserDetails: function(){   // methods

        //console.log("Got user details from database");

        // console.log(`Username: ${username}`); 
        //  (1) gives error for above code as we access name from outside its access , So use 'this' to access the properties value

        // console.log(`Username: ${this.username}`); 
        
        console.log(this);
        // it prints all info oject in json format 
    }

}


//console.log(user.username)
//console.log(user.getUserDetails());     (1)


// console.log(this);   => {} 
// global object access 
// represents no object available till now

//--------------------------------------------------
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

     // above LHS = variable name 
         //     RHS = i/p value or parameter

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this  
    // so above code means we have passed object 
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
// if we do not use 'new' in both 'user1' and 'user2' so if we print 'user1' we get values of 'user2' as it override value as "USER" only one instance available 

// With help of new keyword both are different instance 

console.log(userOne.constructor);
// o/p => [Function : User]

//console.log(userTwo);

// (   instanceof operator   ) 

console.log(userOne instanceof user);
// => true

console.log(userTwo instanceof user);
// => true

console.log(userOne instanceof Object);
// => true