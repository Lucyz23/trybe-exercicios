  //exemplo2 
  //Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise. Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.

  
  const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

  const allInfos = {
    ...user,
    ...jobInfos,
  };

 const { name, age, nationality, profession, squad, squadInitials} = allInfos;
 console.log(`Olá, meu nome é ${name}, Eu tenho ${age} e sou de ${nationality}. Trabalho como ${profession} e meu grupo é ${squadInitials} - ${squad}`);