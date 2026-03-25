const carriage1 = ["Veer","Ayush","Ravi"]
const emptyCarriage = []

const threeEmptySeats = Array(3)
console.log(threeEmptySeats.length)
const passengers = Array('Veer',"Ayush","Ravi")

const singlePassenger = Array.of(3)
console.log(singlePassenger)

const trainCode = Array.from("Dust")
console.log(trainCode)

console.log(typeof[])
console.log(Array.isArray([]))

// Key points
// 1. [] Array(n)
// 2. array are 0 based
// 3. Mutating method : push pop shift unshift splice
// 4. Non Mutating: concat, slice, flat, flatmap
// 5. Searching includes
// 6. Array.isArray
