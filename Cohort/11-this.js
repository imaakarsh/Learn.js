console.log(this);

function ranverronGlobalStage(){
    return typeof this;
}
console.log(ranverronGlobalStage())

function ranverrnoscript(){
    "use strict";      
    return this;
}
console.log(ranverrnoscript());

const flimDirectore = {
    name:"Sanjay Leela ",
    cast: ["Ranveer","Deepika","priyanka"],

    announceCast(){
        this.cast.forEach((actor) => {
            console.log(`${this.name} introduce ${actor}`)
        })
    }
}
flimDirectore.announceCast()

const FlimSet = {
    crew: "Spot boys",
    prepareProps(){
        console.log(`Outer this.crew ${this.crew}`);

        function arrangeChairs(){
            console.log(`Inner this.crew:${this.crew}`);
        }
        arrangeChairs();
    }
};

FlimSet.prepareProps();

