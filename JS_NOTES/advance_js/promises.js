// create promise object
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

// to use it we need to call resolve() in promise 
promiseOne.then(function(){
    console.log("Promise consumed");
})

// method 2    create promise object
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)  // 1 sec 

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

// user => object
promiseThree.then(function(user){  
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        // let error = false        also check 
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){

    // const response = await promiseFive
      //  console.log(response);
      // above code gives eroor when error = true as async do not handle or catch error , so we need try catch to implement it without further error 

    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()
//  call to promise

       // m - 1
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json() 
           // convert response data to json format and use awsit keyword as this convrsion will take a lot of time so use 'await'

//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()
     

// m - 2  
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// in these fetch gets data in form of promise request so keep in '.then' and return to next '.then' and catch block to handle error 

// In o/p we get to see that promise 5 execute first than all other promises but we have writtn code of p5 at last so what was all previous code doing 

// Ans => read fetch theory and in event loop Since fetch has highPQ so it is executed first then rest all task in task queue gets executed

// promise.all
// yes this is also available, kuch reading aap b kro.