let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
  ];

  //milestone 1:

  let studentsMaiusc = [];

  students.forEach((element) =>{
    let nome = element['name'];
    studentsMaiusc.push(nome.toUpperCase());
  }
  )
  console.log(studentsMaiusc)

  //milestone 2:

  const votesUpTo70 = students.filter((element) => {
    let voti = element['grades'];

    if(voti > 70){
        return true
    }
  }
  )

  console.log(votesUpTo70)

  //milestone 3:

  const idUpTo120 = students.filter((element) => {
    let id = element['id'];

    if(id > 120){
        return true
    }
  }
  )
  console.log (idUpTo120)

  //creo un nuovo array contenente sia id > 120 && voti > 70

  let arrayFinal = [];
  
  idUpTo120.forEach ((element) => {
    if (votesUpTo70.includes(element)){
        arrayFinal.push(element)
    }
  }
  )
  console.log(arrayFinal)