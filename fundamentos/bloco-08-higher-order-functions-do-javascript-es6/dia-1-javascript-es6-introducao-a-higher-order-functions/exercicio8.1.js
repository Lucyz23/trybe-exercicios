const { min } = require("moment");

const employee = (nomeCompleto) => {
    const email = nomeCompleto.toLowerCase().split(' ').join('_');
    return { nomeCompleto, email: `${email}@trybe.com` };
};
const newEmployees = (callback) => {
    const employees = {
        id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};
console.log(newEmployees(employee));

//2- Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const numberSorteio = (meuNumero, number) => meuNumero === number;
const resultadoLoteria = (meuNumero, callback) => {
    const number = Math.floor((Math.random() * 5) + 1);
    return callback(meuNumero, number) ? 'Parabéns, você ganhou!!' : 'Tente novamente'
};
console.log(resultadoLoteria(4, numberSorteio));

//3- Cria uma HOF que receberá três parâmetros; 
// O primeiro será um array de respostas corretas (Gabarito);
// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareAnswers = (rightAnswer, studentAnswer) => {
    if (rightAnswer === studentAnswer) {
        return 1;
    } if (studentAnswer === 'N.A') {
        return 0;
    }
    return -0.5;
};

const contadorPontos = (rightAnswer, studentAnswer, acao) => {
    let counter = 0;
    for (let index = 0; index < rightAnswer.length; index += 1) {
        const acaoRetorno = acao(rightAnswer[index], studentAnswer[index]);
        counter += acaoRetorno;
    }
    return `Resultado final: ${counter} pontos`;
}
console.log(contadorPontos(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));

//BONUS

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

const dragonAttack = (dragon) => {
    const minDmg = 15;
    const maxDmg = Math.floor(Math.random() * dragon.strength);
};

const warriorAttack = (warrior) => {
    const minDmg = warrior.strength;
    const maxDmg = Math.floor(Math.random() * (minDmg * warrior.weaponDmg));
    const warriorDmg = maxDmg > minDmg ? maxDmg : minDmg;
    return warriorDmg;
};

const mageAttack = (mage) => {
    const mageMana = mage.mana;
    const minDmg = mage.inteligencia;
    const maxDmg = minDmg * 2;
    const turnStatus = {
        manaSpent: 0,
        damageDealt: 'Não tem mana suficiente',
    };
    if (mageMana > 15) {
        mageDmg = minDmg < maxDmg ? maxDmg : minDmg
        turnStatus.manaSpent = 15;
        turnStatus.damageDealt = mageDamage;
        return turnStatus;
    }
    return turnStatus;
};

const gameActions = {
    warriorTurn: (warriorAttack) => {
        const warriorDamage = warriorAttack(warrior);
        warrior.damage = warriorDamage;
        dragon.healthPoints -= warriorDamage; 
    },


    mageTurn: (mageAttack) => {
        const mageTurnStatus = mageAttack(mage);
        const mageDamage = mageTurnStatus.damageDealt;
        mage.mana -= mageTurnStatus.manaSpent;
        dragon.healthPoints -= mageDamage;
        mage.damage = mageDamage;
    },

    dragonTurn: (dragonAttack) => {
        const dragonDamage = dragonAttack(dragon);
        mage.healthPoints -= dragonDamage;
        warrior.healthPoints -= dragonDamage;
        dragon.damage = dragonDamage;
    },
    turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.turnResults());