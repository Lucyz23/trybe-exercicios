// definindo o objeto
const character = {
    name: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      name: 'Tatooine',
      population: '200000',
    },
  };
  //Queremos extrair o nome do personagem, a idade, o nome do planeta e verificar se ele é um Jed
  // desestruturando o objeto:
  //Como foi mostrado, para desconstruir uma chave que contém um objeto como valor, precisamos utilizar o nome da chave seguido por :, segue a sintaxe: homeWorld: { name: planetName }. 
  //Agora planetName é uma variável que recebe o valor da propriedade name do objeto homeWorld.

  const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;
  
  // imprimindo os valores:
  console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);
