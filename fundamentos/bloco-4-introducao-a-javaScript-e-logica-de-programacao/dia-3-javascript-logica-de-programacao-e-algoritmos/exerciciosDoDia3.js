//O fatorial é representado pelo sinal !

let fatorial = 1; // o fatorial é a multiplicação de um numero natural pelos seus antecessores, exceto o ZERO, então começa por 1

for (let index = 10; index > 0; index -= 1){    //10 porque o exercicio quer o fatorial de 10.
    fatorial *= index;
} console.log(fatorial);

//Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let reverseWord = '';

reverseWord = word.split('').reverse().join('');

console.log(reverseWord);

//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
}

console.log(biggestWord);
console.log(smallestWord);

//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let maiorNumeroPrimo = 0;
for(let number = 2; number <= 50; number += 1){
    let primo = true;
    for (let divisor = 2; divisor < number; divisor += 1){
        if(number % divisor === 0){
            primo= false;
        }
    }
    if (primo){
        maiorNumeroPrimo = number;
    }
}
 console.log (maiorNumeroPrimo);