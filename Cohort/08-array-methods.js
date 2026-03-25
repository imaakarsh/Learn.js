// const orders = [
//     { dish: "Pasta Carbomara",price:14,},
//     { dish: "Momos",price:10,},
//     { dish: "Pasta Carbomara",price:14,},
//     { dish: "Pasta Carbomara",price:14,}
// ]

// const myData = orders.forEach((orders,index)=>{
//     console.log(`#$(index+1):${orders.qty}x ${orders.dish}`);
// });

// const grouped = orders.reduce(
//     (acc,order)=> {
//         const category = order.spicy?"spicy" : "mild";
//         acc[category].push(order.dish);
//         return acc;
//     },
//     {spicy:[],mild:[]},
// );
// orders.reduce(grouped)

const ticketNumbers = [100,23,45]
const sort = [...ticketNumbers].sort((a,b)=> a-b);
console.log(sort);