// despesas.js

const minhasDespesas = [
    {
      academia: 99,
    },
    {
      ifood: 200,
    },
    {
      celular: 60,
    },
    {
      internet: 100,
    },
  ];
  
  const minhaRenda = 1000;

const despesaMensal = (renda, despesas, callback) => {    //o callback receberá uma função que retornará o quanto gastamos no mês.nossa função callback irá realizar a lógica necessária para somar todos os gastos contidos no array de objetos minhasDespesas e retornará esse valor para a constante despesaTotal.
    const despesaTotal = callback(despesas);
    const saldoFinal = renda - despesaTotal;
  
    console.log(`Balanço do mês:
      Recebido: R$${renda},00
      Gasto: R$${despesaTotal},00
      Saldo: R$${saldoFinal},00 `);
  };

  const somaDespesas = (despesas) => {
    const custoItem = despesas.map((item) => Object.values(item));
    const despesaTotal = custoItem.reduce((acc, curr) => {
      const soma = acc + curr[0];
      // acc é a sigla para accumulator (acumulador)
      // curr é a sigla para current_value (valor atual)
      return soma;
    }, 0);
    return despesaTotal;
  };