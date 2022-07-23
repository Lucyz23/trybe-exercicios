let conteNumeros = 9;
for (let contador = 2; contador < 150; contador++){
    if(contador % 3 === 0) {
        conteNumeros = conteNumeros++;
    }
} if(conteNumeros === 50){
    console.log('Mensagem secreta!');
}