/* Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/
let container = document.getElementById("contenitore")
let biciclette = [
    {
        'nome' : 'prima bici',
        'peso' : 20   
    },
    {
        'nome' : 'seconda bici',
        'peso' : 30   
    },
    {
        'nome' : 'terza bici',
        'peso' : 40   
    },
    {
        'nome' : 'quarta bici',
        'peso' : 50   
    }
];
//do un valore a caso di un oggetto alla variabile per iniziare poi nel ciclo if la comparazione con gli altri oggetti
let biciLeggera = biciclette[0]


for(var i = 0; i < biciclette.length; i++){
    let x = biciclette[i]
    if(biciLeggera['peso'] > x['peso']){
        biciLeggera = x;
    }
}
console.log(biciclette)
console.log(biciLeggera)
//destrutturizzazione
const {nome, peso} = biciLeggera;
container.innerHTML= `
<div>la bici ${nome} è la più leggera! e pesa ${peso}</div>
`

