//Procure o índice do valor "Portfólio" do array menu

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

//Adicione o valor "Contato" no final do array menu

let menuPush = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato');

console.log(menu);

//Utilize o for para imprimir os elementos da lista groceryList com o console.log()
//conteúdo do FOR

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index++) {
    console.log(groceryList[index]);
}

//Conteudo de FOR/OF
//Utilize o for/of para imprimir os elementos da lista names com o console.log():

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let nameList of names) {
    console.log(nameList);
}
//exercicio

let comidas = ['batata-frita', 'salgadinho', 'pizza'];
for (let index = 0; index < comidas.length; index += 1) {
    console.log(comidas[index]);
};

let animes = ['Dragon Ball', 'Naruto', 'Pokémon'];
for (let index = 0; index < animes.length; index += 1) {
    console.log(animes[index])
}

for (let index = 0; index <= 20; index += 1) {
    console.log(index);
}


//exercicios principais

let comandoDosInfernos = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
for (let index = 0; index < comandoDosInfernos.length; index += 1) {
    result += comandoDosInfernos[index];
}
console.log(result);

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < number.length; index += 1) {
    sum += number[index];
}

let average = sum / number.length; //soma (sum) de todos os elementos dividido pela quantidade de elementos do array.

console.log(average);

//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"

let numb = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resul = 0;

for (let index = 0; index < numb.length; index += 1) {
    resul += numb[index];
}
resul = resul / numb.length;

if (resul > 20) {
    console.log('valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20')
}

//Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numero = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = numero[0];

for (let index = 0; index < numero.length; index += 1) {
    if (numero[index] > resultado) {
        resultado = numero[index];
    }
}
console.log(resultado);

 //Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

 let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultados = 0;

for (let index = 0; index < numeros.length; index += 1) {
  if (numeros[index] % 2 !== 0) {
    resultados += 1;
  }
}

if (resultados === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(resultados);
}

//Utilizando for, descubra qual o menor valor contido no array e imprima-o;



// o valor da variável smallestNumber poderia ser qualquer um, desde que fosse maior que o maior número do array numbers. Caso atribuíssemos o valor 1 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número menor que 1 no array. Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1
let comandoDosInfernos= [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallestNumber = comandoDosInfernos[0];

for (let index = 1; index < comandoDosInfernos.length; index += 1) {
  if (comandoDosInfernos[index] < smallestNumber) {
    smallestNumber = comandoDosInfernos[index];
  }
}

console.log(smallestNumber);

//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado.

let numbers = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}

console.log(numbers);

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let numbers = [45];
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2);
  };





  const n = 9 ;

  let resultado = 100;
  for (let index = 0; index <= n; index += 1) {
    resultado -= index;
  };
  console.log(resultado);