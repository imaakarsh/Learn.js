class Cricketers {
    constructor(name,role){
        this.name = name
        this.role = role
        this.matchesPlayed = 0
        this.stamina = 100
    }
    introdused(){
        return `${this.name} the ${this.role} | matchesPlayed: ${this.matchesPlayed} | stamina : ${this.stamina}`
    }
}

const player1 = new Cricketers("Virat","Batsman")
const player2 = new Cricketers("Bumrah","Bowler")

console.log(player1.hasOwnProperty("name"))
console.log(typeof Cricketers) 

class Debutant{
    constructor(name){
        this.name = name
        this.walkOut = () => 
    }
}