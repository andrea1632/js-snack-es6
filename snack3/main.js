const nomiArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
let min = 2;
let max = 4;

let arrayNuovo = []


//metodo con forEach
nomiArray.forEach((element, index) => {

    if ( index >= min && index <= max ){
        arrayNuovo.push(element)
    }
}
)
console.log(arrayNuovo)
//metodo con filter
