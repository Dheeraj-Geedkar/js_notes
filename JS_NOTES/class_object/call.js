function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    
    //Don't use ( this.username = username ) in these 
    // USe ( SetUsername( username)  ) 
//o/p => (a)      => error 
// As ( SetUsername( username)  ) only calls SetUsername() but do not send result back to  createUser() because reference lost in function stck call 'this' lost 

    SetUsername.call(this, username)
// Use of call() with 'this' reference helps to invoke a method as well as retrieve result from funtion because reference will not get lost     
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);      //   (a)
