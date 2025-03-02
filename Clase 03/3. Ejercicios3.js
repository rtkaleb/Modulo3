//Usar cualquier tipo de bucle para realizar una tabla de multiplicar
let respuesta;

    respuesta = parseInt(prompt("Por favor ingresa un número y te mostraré su tabla de multiplicar del 1 al 10"));
    for(let i = 1; i <= 10; i++){
       console.log(respuesta, "x", i, "=", respuesta * i);
    }


//Contar los dígitos de un número
let número;
let contador = 0;
let i = 0;
número = parseInt(prompt("Por favor ingresa un número y te diré cuántos dígitos tiene"));
let arraynúmero = String(número);
while(i < arraynúmero.length){
    contador++;
    i++;
}
console.log("El número tiene: ", contador , "dígitos");


//Obtener la suma de los dígitos de un número
let total = 0;
let numero = parseInt(prompt("Por favor ingresa un número y te diré la suma de sus dígitos"));
let arrayDigitos = Array.from(String(numero), Number);
for(let num of arrayDigitos){
    total += num;
}
alert("La suma de los dígitos es: ", total);



//Encontrar el número mayor de un arreglo
let a = Array.from({ length: 10 }, () => Math.floor(Math.random() * 101));
let b = 0
for(let i = 0; i < a.length; i++){
    if(a[i] > b){
        b = a[i];
    }
}
console.log(a);
console.log(b);