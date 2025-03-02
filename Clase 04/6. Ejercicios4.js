//Palíndromo
//Crear función que verifica si una palabra es palíndromo o no es palíndromo
function palindromo(palabra){
    let palabraInvertida = palabra.split("").reverse().join("");
    let a = palabra.toUpperCase().replace(/\s/g, "");
    let b = palabraInvertida.toUpperCase().replace(/\s/g, "");
    if(a == b){
        return "es palíndromo";
    } else {
        return "no es palíndromo";
    }
}
let palabraIngresada = prompt("Por favor escribe un palíndromo");
let resultado = palindromo(palabraIngresada);
console.log(palabraIngresada, resultado);



//Filtrar los números mayores de un número 
function filtrarNumeros(array, numero){
    let resultad = array.filter(function(item){
        return item > numero;
    });
    return resultad;
}
let array = [1,2,3,4,5,6,7,8,9,10];
let numero = 5; 
let resultad = filtrarNumeros(array, numero);
console.log(resultad);



//Área de un círculo
function areacirculo(r){
    return Math.PI*r*r;

}
let resulta = areacirculo(63);
console.log(resulta);



//Ejercicio anterior y convertirlo en función
//Encontrar la suma de los dígitos de un número
function sumaDigitos(numero){
    let total = 0;
    let arrayDigitos = Array.from(String(numero), Number);
    for(let num of arrayDigitos){
        total += num;
    }
    return total;
}
let numer = parseInt(prompt("Por favor ingresa un número y te diré la suma de sus dígitos"));
let total = sumaDigitos(numer);
console.log(total);




//Crear operaciones matemáticas
function suma(a,b) {
    return a + b;
}
let sum = prompt("Ingresa un número");
let sum2 = prompt("Ingresa otro número");   
let result = suma(sum, sum2);
console.log(result);

function resta(c,d) {
    return c - d;
}   
let res = prompt("Ingresa un número");
let res2 = prompt("Ingresa otro número");   
let resul = resta(res, res2);
console.log(resulta);

function multiplicación(e,f){
    return e*f; 
}
let mult = prompt("Ingresa un número");
let mult2 = prompt("Ingresa otro número");  
let resu = multiplicación(mult, mult2);
console.log(resu);

function división(g,h){
    return g/h;
}
let div = prompt("Ingresa un número");
let div2 = prompt("Ingresa otro número");
let re = división(div, div2);
console.log(re);
