//1 - Utilize sort para ordenar o array pela idade das pessoas em ordem crescente.

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  people.sort((ageA, ageB) => ageA.age - ageB.age);
 //people.sort((ageA, ageB) => ageB.age - ageA.age);
  
  console.log(people);