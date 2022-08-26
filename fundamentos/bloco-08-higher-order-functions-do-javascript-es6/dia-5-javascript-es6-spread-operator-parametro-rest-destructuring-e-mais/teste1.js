// Faça uma lista com as suas frutas favoritas
const specialFruit = ['melancia', 'morango', 'mamão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['pêra', 'leite-condensado', 'melão'];

const fruitSalad = (fruit, additional) => {
    const salad = [...fruit, ...additional];
    return salad;
};

console.log(fruitSalad(specialFruit, additionalItens));

//exemplo2: 

const specialPeople = ['José', 'Joana', 'Megas', 'Renato'];
const specialPeople2 = ['Rafa', 'Luna', 'Aysla'];

const allPeople = (people, people2) => {
    const conjuntoPeople = [...people, ...people2];
    return conjuntoPeople;
}
console.log(allPeople(specialPeople, specialPeople2));