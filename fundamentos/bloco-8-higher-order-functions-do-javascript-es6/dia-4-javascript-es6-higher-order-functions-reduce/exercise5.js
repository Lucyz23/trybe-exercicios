//5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  const contarLetras = (letra) => (value) => Array.from(value.toLowerCase())
    .reduce((acc, it) => it === letra ? acc + 1 : acc, 0)
    const containsA = () => names.reduce((a, b) => {
        a += contarLetras('a') (b);
        return a;
    }, 0);
  console.log(containsA());