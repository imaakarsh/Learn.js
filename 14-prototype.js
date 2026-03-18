const prithviraj = {
    name : "Prithviraj ",
    generation : "grandfather",
    cookTraditionalDish(){
        return `${this.name} cook an acncient`;
    },
};

const raj =  Object.create(prithviraj);
// console.log(raj.name);

raj.name = "raj"
raj.generation = "father";
raj.runBusiness = function(){
    return `${this.Object}`
}