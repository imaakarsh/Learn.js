// eve

// const { Suspense } = require("react");



// let h1 = document.querySelector("h1");
// let p = document.querySelector("p");
// h1,p.addEventListener("click", function(){
//     p.style.color = "green";
//     h1.style.backgroundColor = "pink";
// });


// let p = document.querySelector("p");
// p.addEventListener("dblclick",function(){
//     p.style.color="blue";
// })

// Element.addEventListener("eventname",function(){

// })
// let p = document.querySelector("p");

// function dbclick() {
//     p.style.color = "yellow";
// }


// p.addEventListener("dblclick",dbclick);
// p.removeEventListener("dblclick",dbclick);


// let inp = document.querySelector("input");

// inp.addEventListener("input", function (data) {
//     console.log(data);

// });

let inp  = document.querySelector("input");

inp.addEventListener("input",function(dets){
    if(dets.data != null){
        console.log(dets.data);
        
    }
})