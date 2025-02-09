console.log('Hola Mundo'); // Arojará la leyenda "Hola Mundo"

// Tipos de dato primitivo
let nombre = "Ivan"; // String
let edad = 23; // Number
let EsMayorDeEdad = true // Booleano
let saldo; // Undefined
let cuenta = null; // Null
let id = Symbol("id"); //Symbol
let NumeroGrande = 18941898298416841n; // Biginit
let Fecha = new Date (); // Fecha

// En esta sección me arrojará los tipos de dato
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof EsMayorDeEdad);
console.log(typeof saldo);
console.log(typeof cuenta); // Me arrojara  "Object" porque es un error histórico en JS de acuerdo con los bits con los cuales está definido
console.log(typeof id);
console.log(typeof NumeroGrande);
console.log(typeof Fecha); // Me arrojará "Object" por la misma razón que null

// En esta sección me arrojará el valor definido de los datos
console.log(nombre);
console.log(edad);
console.log(EsMayorDeEdad);
console.log(saldo); 
console.log(cuenta); 
console.log(id);
console.log(NumeroGrande);
console.log(Fecha); // Me arrojará la fecha de este momento en que ejecuto el programa

//Definimos un Objeto
let persona = {
    edad: 29,
    nacionalidad: "Mexicano"
}

console.log(persona); // Imprime toda la info de mi objeto
console.log(persona.edad); // Un dato específico del objeto

//Definimos Array
let numeros = [1,2,3,4,5]
console.log(numeros); // Imprime toda la cadena
console.log(numeros[0]); // Imprime un dato específico de mi cadena, en este caso sería el dato que se encuentra en la posición 0, es decir: 1

//Definimos función
let suma = function suma(a,b) {return a + b} // Definimos con sintaxis (parámetros) y devolvemos el valor a+b
console.log(suma(2,5)); // Imprime el resultado de la suma de 2+5, es decir: 7