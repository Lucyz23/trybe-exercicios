     const movimentoDeXadrez = 'rei';

switch (movimentoDeXadrez.toLowerCase()) {
    case 'rei':
        console.log('Rei -> Apenas uma casa para qualquer direção.');
        break;
    case 'bispo':
        console.log('Bispo -> Diagonal.');
        break;
    case 'rainha':
        console.log('Rainha -> Pode fazer qualquer jogada de qualquer peça');
        break;
    case 'peão':
        console.log('Peão -> Só anda para frente, pode andar 2 casa de uma vez na primeira jogada');
        break;
    case 'torre':
        console.log ('Torre -> Ela anda para frente ou para o lado quantas casas quiser por jogada');
        break;
    case 'cavalo':
        console.log ('Anda em L, pode passar por cima de outras peças');
        break;
        default:
            console.log("Erro, peça inválida");
            break;
};

const Porcentagem = 80 ;
if (Porcentagem < 0 || Porcentagem > 100){
    console.log("Erro, nota incorreta!");
} else if (Porcentagem >= 90) {
    console.log ("A");
} else if (Porcentagem >= 80){
    console.log ("B");
} else if (Porcentagem >= 70){
    console.log ("C");
}else if (Porcentagem >= 60){
    console.log("D");
}else if (Porcentagem >= 50) {
    console.log("E");
}else {
    console.log("F");
} 
 //Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
const a = 3;
const b= 35;
const c= 23; 

let chance = false;
if((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)){
    chance = true;
} ; console.log(chance);

//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

const y = 3;
const z= 35;
const x= 23; 

let chances = false;
if((a % 3 === 0 || b % 3 === 0 || c % 3 === 0)){
    chances = true;
} ; console.log(chances);

const custoDoProduto = 1;
const ValorDeVenda = 3;

if (custoDoProduto >= 0 && ValorDeVenda >= 0 ) {
    const valorCustoTotal = custoDoProduto * 1.2;
    const lucro = (ValorDeVenda - valorCustoTotal) * 1000;
    console.log(lucro);
} else {
    console.log("Error, os valores nao podem ser negativos");
};



function splitSentence() {
    stringExemplo = " go trybe";
    resultado = stringExemplo.split (" ");
    
    console.log(resultado);
    }
    