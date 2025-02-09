//String
let mensaje = "Hola Mundo";
console.log(mensaje.toUpperCase());

let nombre = "Kaleb";
console.log(`Hola ${nombre}`)
console.log('Hola ${nombre}')
console.log('Hola ' + ' Como estas?'); //Se usa un espacio para concatenar
console.log('Hola', nombre);
console.log('Hola', nombre, 'Como esta?'); // Como ya tengo "," ya no es necesario el espacio

//Boolean
let esMayor = false;
console.log(esMayor && false); // False, porque al menos uno de los dos es false

//Arrays
let alumnos = ["Adelina", "Randy", "Saul", "Maria"];
console.log(alumnos[3]);
//Modificar con asignación
alumnos[2] = "Ian";
console.log(alumnos);
//Añadir
alumnos.push("Natalia")
console.log(alumnos);

alumnos.unshift("Scarlett")
console.log(alumnos);

console.log(alumnos.length);

//Numeros
let x = 2;
x += 5; //x = x + 5;

console.log(x);

let division = 0;
console.log(division / 0);

// Condicionales

let nota = 7;
const notaAprobatoria = 6;

if(nota >= notaAprobatoria) {
    console.log("Estas aprobado");
} else {
    console.log("Estas reprobado");
}

//Ejemplo de clima con else if
let temp = 18;

if (temp > 30) {
    console.log("Te estas derritiendo de calor");
} else if (temp >= 21 && temp <= 29) {
    console.log("Esta haciendo buen clima");
} else {
    console.log("Te estas congelando");
}

let edad = 23;
let resultado = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad"; // Es un if en una sóla línea de código
console.log(resultado);

console.log( 1==='1')
console.log(1=='1' || 1==='1');

let dia = 'jueves'
switch(dia){
    case 'lunes':
        console.log('Inicio de semana');
        break;
    case 'jueves':
        console.log('Jueves chido');
        break;
    default:
        console.log('No se que dia es hoy');
}

console.log("Hola");

//Valor aleatorio
let valorRandom = Math.floor(Math.random() * 101) //El Math.floor redondea decimales hacia abajo, el 101 nos da números del 0 al 100
console.log(valorRandom);