/* Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/
let squadre = [
    {
        'nome' : 'napoli',
        'punti' : 0,
        'falliSubiti' : 0
    },

    {
        'nome' : 'milan',
        'punti' : 0,
        'falliSubiti' : 0
    },

    {
        'nome' : 'empoli',
        'punti' : 0,
        'falliSubiti' : 0
    },

    {
        'nome' : 'atalanta',
        'punti' : 0,
        'falliSubiti' : 0
    },
];
let squadreNuovo = [];

for ( i = 0; i < squadre.length; i++){
    let randomNum = getRandomInt()
    let randomNum2 = getRandomInt()
    squadre[i]['punti'] = randomNum
    squadre[i]["falliSubiti"] = randomNum2
    let {nome, falliSubiti} = squadre[i]
    squadreNuovo.push({nome, falliSubiti})
}


console.log(squadreNuovo)
console.log(squadre)
//funzione per generare numeri random
function getRandomInt (){
    return Math.floor(Math.random() * 100)
}