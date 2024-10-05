class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    // In case of getters and setters name of use keyword 'get' and 'set' and method_name is same as property

    get email(){  // getters 
        return this._email.toUpperCase()
    }
    // return in case of getters 


    set email(value){ // setters 
        this._email = value
    }
    // just set value in case of setters

    get password(){
        return `${this._password}hitesh`
    }

    // We ( this._password ) have used in place of ( this.password ) as in setter we set value and constructor also set value so we get Stack overflow error as compiler confused that who will update value . Hence we use differnt property_name to setter to avoid conflict and same concept for the getters also  

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email); // calls getter not property

// getters and setters exist in a pair .If we have created a getter then we have to set setter also Else we get error

