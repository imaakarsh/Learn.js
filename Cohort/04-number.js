const crewMenber = 40;
const fuelTons = 143.43;
const light_speed = 233_4555_555;

const infinityRange = Infinity
const negativeinfinityRange = -Infinity

const notANumber = NaN

console.log(1/0);

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.isFinite)

const fuelReading = "142.75 tons"
const sectorCode ="0xa3"
const countDown = "007"

console.log(parseInt(sectorCode))
console.log(parseInt("111",2));


const ThrustForce = 4.75
console.log(Math.floor(ThrustForce))
console.log(Math.ceil(ThrustForce))
console.log(Math.trunc(ThrustForce))

const temps = [-120,32,34,64]
console.log(Math.max(temps))

console.log(0.1 + 0.2)
console.log(0.1 + 0.2 === 0.3)


function allmost(a,b){
    return Math.abs(a-b) < Number.EPSILON
}
console.log(allmost(0.1+0.2,0.3))
