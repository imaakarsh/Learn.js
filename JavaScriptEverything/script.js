// var let const - line by line

// var a                   var use nhi krna
// var a = 2;
// let a;
// let a=23
// var UserName = "Aakarsh"
// a = 23;
// console.log(UserName);
// console.log(a);

// declaraton and initialization
// var a; //decelare
// var a = 3; //decelare and init

// window mein add hota hai
// function scoped hota hai

// app fhirse decelar kr skte ho error nhi aayega

// var e  = 13;
// let f = 13;
// var e = 23; // possible with var
// let f = 23; // not possible with let

// Scope (global,block,functional)
// reassignemet , redeclaration (possible with var)

// Arithmetic operators
// + - * / % **

// comparison operators
// = , += , -= , *= , /= , %= , **= , > , < , >= , <=
// === strict check

12 != 13; // true
// hasan != "hasan" // true

// logical operators
// && , || , !
// && and
// || or
// ! not

/*
let x = 10;
x+=10;
console.log(x);
x-=10;
console.log(x);
x*=10;
console.log(x);
x/=10;
console.log(x);
x%=10;
console.log(x);
x**=10;
console.log(x);
*/

// conditional statements
/*
true && true // true && and
true && false // false
false && true // false
false && false // false
true || true // true || or
true || false // true
false || true // true || or
false || false // false
!true // false
!false // true
*/

//unary operator
// ++ , -- , + , - , ! , typeof , void , delete

//ternary operator
// condition ? true : false

// condition ? true : false

/*
function getGrade(score){
    if (score >=90 && score <=100){
        return "B";
 }
    else if(score >=80 && score <=89){
        return "B"; 
    }
    else if(score >=70 && score <=79){
        return "C"; 
    }
    else if(score >=60 && score <=69){
        return "D"; 
    }
    else {
        return "Invalid Marks";
    }
}

console.log(getGrade(78));


*/

/*
function rps(user,comp){
        if (user == "rock" && comp === "scissor") return "user";
        if (user == "rock" && comp === "paper") return "computer";
        if (user == "rock" && comp === "scissor") return "rock" ;
}


rps("rock","scisor")

*/

// Loops -> Reapeat krne ko loop khte h
// for / while / do-while / forin / foreach

// 1 1 1 1 1 1 1 1 1
// 1 2 3 4 5 6 7 8 9

// kaha se jaana hai -> kaha tk jana hai -> kaise jaana hai
//for
// for(let a=1; a<=50; i+1){
// console.log(a);

// }

// kaha se jaana hai -> kb rukna hai -> kaise jana hai
// while

// 1 -40 for
// hello na aajaye - while

// bhallu miley jab jiske upar hirad baitha hai - while

// for loop
// for(let i=1; i<100; i++){
//     console.log("hui hui");

// }

// while loop
// let i = 0;
// while(i<=100){
//     console.log("hehehe");
//     i++;
// }

// q1
// for(i=1;i<=10;i++){
//     console.log(i);

// }

// q2
// for(i=1; i<=20; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// q3
// let str = "hello";
// let rev = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     rev += str[i];
// }

// console.log(rev); // olleh

// q4
// let i = 1;
// while (i <= 15) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
//   i++;
// }

// q5

// for (i = 1; i <= 10; i++) {
//   console.log(5 * i);
// }

// q6
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// q7

// for(i=1;i<=50;i++){
//     if(i%3==0){
//         console.log(i);

//     }
// }

// q8

// let val = prompt("Give a number");
// for (let i = 1; i < +val; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`);
//   } else {
//     console.log(`${i} is odd`);
//   }
// }

// for (i = 1; i <= 101; i++) {
//   console.log(i);

//   if (i % 7 === 0) {
//     break;
//   }
// }

// 1 2 4 5 7 8 10 11.... (no 3 6 9....)

// for (i = 1; i <= 100; i++) {
//     if (i % 3 === 0) continue;
//     console.log(i);

// }

// FUNCTION

// function declaration
// function hello() {
//   console.log("dance");
// }
// hello();
// hello();

// // Function Expration
// let val = function () {
//   console.log("HelloFunction");
// };

// val()

// arrow function

// let abc = () => {
//     console.log("hello");

// };
// abc();

// function add(v1, v2) {
//   console.log(v1 + v2);
// }
// add(1, 2);

// jab arrugemtn kai sare ho to humai utne hi paremets banane padhega , ise bachne k liye hm rest ka use krte hai (...) agr ... function ke paramerts space m lge to wo rest operators hai

// function abcd(...val) {
//   console.log(val);
// }
// abcd(1, 2, 3, 4, 5);

//return  matlab jaha se aaye ho whi dall dennde

// first class fncs ->

// closure -> ek fnc jo returm lare ek aur func aur return hone wala func hmesha use  krega parent fnc ka koi varialbe

// function abcd() {
//   let a = 12;
//   return function () {
//     console.log(a);
//   };
// }

// function abcd() {
//   let a = 12;
//   function defg() {
//     let b = 13;
//     function ghij() {
//       let c = 14;
//     }
//   }
// }

// IIFE
// (function () {
//   console.log("call ho chuka h");
// })();

// q1 what is the diff b/w function dec and expression in term of hosting?
// abcd();

// function abcd() {}

// convert  function into arrow function

// function mul(a,b){
//     return a * b;
// }

// let mul = (a,b) => {
//     return a*b;
// }

// use rest parameters to accept any number of scores and return the total

// function getScore(...scores) {
//   let total = 0;
//   scores.forEach(function (val) {
//     total = total + val;
//   });
//   return total;
// }

// console.log(getScore(10, 12, 14, 18));

// Ques - pass a function into another funcrtion and execute it isnside

// function abc(val) {
//   val();
// }
// abc(function () {
//   console.log("hey");
// });

// Question
// (function () {
//   console.log("Initialized");
// })();

// function counter() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }

// let c = counter();
// console.log(c());


