const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = numbers.find((number) => number % 3===0 | number % 5===0);
  // Adiciona seu código aqui


console.log(findDivisibleBy3And5);

//Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = names.find((names) => names.length === 5);
  // Adicione seu código aqui:


console.log(findNameWithFiveLetters);

//Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
    return musicas.find((music) => music.id === id);
    // Adicione seu código aqui
  }
  
  console.log(findMusic('31031685'))