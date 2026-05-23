// Primitive 

// call by value 

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt 


// refrece (non primititve) type

// arry , obj , functions 

let a = 334
console.log(a);

const b  = 2344
const c = 234.45

let d  = null 
let e  = false 

const BigInt = 2333333333333456789
console.log(BigInt);


const heros = [ "shaktiman" , "doga"]
let myObj = {
    name: "aakarsh",
    age: 2
}

const myfunc = function(){
    console.log("Hello Function");
    
}


console.log(typeof BigInt);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive)  , heap (non primitive)

let myYoutube = "aakatshh"

let aonotherName = myYoutube
aonotherName = "chaiii"

console.log(aonotherName);
console.log(myYoutube);

let user1 = {
    email : "gamil.com",
    upi : "chai"
}

let user2 = user1
user2.email = "googe.com"
let usr2 = user1 

console.log(user1.email);

console.log(usr2.email);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++