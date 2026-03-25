const weponname = "Flame Sword"
console.log(typeof weponname)

let BonusEffect;

let curseStatus = null;
let weather = null
console.log(weather)

const uniqueRuneId = Symbol("rune_of_fire")
console.log(uniqueRuneId.toString(),typeof uniqueRuneId)

const heroStats = {
    name:"deepak",
    level: 12,
    class:"ranger"
}

console.log(heroStats,typeof heroStats)

const inventory = ["Flame Sword","health"]
console.log(inventory,typeof inventory)

function castspell(){
    return "fireball"
}
console.log("spell", typeof castspell)

///////////////////////////////

console.log(typeof "chaicode")
console.log(typeof 42)
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof Symbol())
console.log(typeof {})
console.log(typeof [])


const originalSward = {
    name : "FlameSward",
    dmage :75,
    typeofW: "fire"
}

const cloneSword = originalSward;
originalSward.dmage = 100;
console.log(originalSward.dmage)

const armorOriginal ={
    name:"Iron PLate",
    defence:80,
    buff:{
        fire:10,
    },
};

// Spread Operators
const armorCopy ={...armorOriginal};
armorCopy.buff.fire=90;

const potionOriginal ={name:"Health", effect:{heal:40}}
const potrionCopy = structuredClone(potionOriginal)

typeof null === "object"
Array.isArray()
