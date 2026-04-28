// Dates 

let myDate = new Date()
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());

let MyCreatedDate = new Date(2023,0,23)
console.log(MyCreatedDate.toDateString());

// ``

newDate.toLocaleDateString('default',{
    weekday: "long",
    timeZone: 'GMT+5:30'
})