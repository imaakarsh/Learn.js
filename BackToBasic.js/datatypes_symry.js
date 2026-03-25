// Primitive 

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber = 123445657866663333333n

// Refrence (Non promitive)

// Arrays , Object, Functions

const heros = ["Ironman","Superman"];

let myObj = 
{
    name : "aakarsh",
    age : 22,
}

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof bigNumber);
