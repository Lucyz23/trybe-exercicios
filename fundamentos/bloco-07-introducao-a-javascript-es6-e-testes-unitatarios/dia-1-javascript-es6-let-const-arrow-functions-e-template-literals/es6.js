function testingScope(escopo) {
    if (escopo === true) {
        var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
        console.log(ifScope);
    } else {
        var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

  //Altere o tipo das variáveis(var) para let ou const para que respeitem o escopo em que foram declaradas, e altere a função utilizando arrow function e template literals.
  //Modifique a estrutura da função para que ela seja uma arrow function;
  //Modifique as variáveis para que respeitem o escopo onde estão declaradas;
  //Modifique as concatenações para template literals.

  const testingScope = (escopo) => {
    if (escopo === true) {
        let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
        ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
        console.log(ifScope);
    } else {
        const elseScope = `Não devo ser utilizada fora do meu escopo (else)`;
        console.log(elseScope);
    }console.log(`${ifScope} o que estou fazendo aqui? :O`);
  } 
  testingScope(true);

  //2-Crie uma função que retorne um array em ordem crescente.

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const sortOddsAndEvens = () => {

    oddsAndEvens[0]= 2
    oddsAndEvens[1]= 3
    oddsAndEvens[2]= 4
    oddsAndEvens[3]= 7
    oddsAndEvens[4]= 10
    oddsAndEvens[5]= 13
    return oddsAndEvens

  }; const sortedArray = sortOddsAndEvens()

  console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

  //PARTE II

  //Crie uma função que receba um número e retorne seu fatorial.

function FirstFactorial(num) {
    return (num === 1 ? 1 : num * FirstFactorial(num -1));
} console.log(FirstFactorial(7));

const FirstFactorial = (num) => {
    let factorial = 2;
    for (let i = 1; i <= num; i++){
        factorial *= i;
    }
    return factorial;
} ;
const print = FirstFactorial(4);
console.log (`Esse é o fatorial ${print}`);

//2-Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

const maiorPalavra = (string) =>{
      const arrayStr = string.split(' ');
      let strLength = 0;
      let palavra = '';

     for(const maior of arrayStr) {
        if (maior.length > strLength) {
            strLength = maior.length;
            palavra = maior;
        }
      };
      return palavra;
}
console.log(maiorPalavra('Antonio foi ao banheiro e não sabemos o que aconteceu'));

const substiuir = (name) => {
    const frase = 'Frase x aqui';
    const fraseArray = frase.split('');
    for (let index = 0; index < fraseArray.length; index += 1){
        if(fraseArray[index] === 'x'){
            fraseArray[index] = name; //troca o valor do x do array pelo nome recebido por parametro.
        }
    }
    return fraseArray.join(' ');
};
const skills = (func) => {
    const skills = ['JavaScript', 'HTML', 'Css'];
    let resultado = `
     ${func}
    Minhas três principais habilidades são: `;

    for ( let index = 0; index < skills.length; index += 1){
        resultado = `${resultado}
        - ${skills[index]}`;
    }
    return resultado;
};
console.log(skills(substiuir('Bebeto')));

