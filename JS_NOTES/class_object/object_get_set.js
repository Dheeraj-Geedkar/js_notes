const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}
 
// factory method of creating object 
// Object.create  => universal object to create object of type 
const tea = Object.create(User)
console.log(tea.email);  // calls getter not property