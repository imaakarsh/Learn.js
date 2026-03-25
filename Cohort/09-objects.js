const hero = {
    name: "Aakarsh",
    class: "Maga",
    level: 22,
    health: 12,
    mana: 120,
    isAlive: true,
};

hero.weapon = "Fire"

delete hero.level

const ranger ={
    name: "lakshay",
    agility: 80,
    stealth:undefined
};

console.log("name"in ranger)
console.log("stealth"in ranger)
console.log()

console.log(ranger.hasOwnProperty("toString"));
