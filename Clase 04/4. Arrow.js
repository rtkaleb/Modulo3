const suma = (x,y) => x + y;
console.log(suma(98,78));

const saludar = (nombre) => {
    return `Hola ${nombre}`;
}

console.log(saludar("Kaleb"));


const numeros = [1,2,3,4,5,6,7,8,9,10];
const multiplicados = numeros.map(num => num * 2);
console.log(multiplicados); //Con array function, se puede hacer en una sola línea