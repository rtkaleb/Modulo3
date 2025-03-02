
let contador = 0; // Inicializamos en 0 nuestro contador

//Sintaxis While
while (contador < 10){
    console.log(contador);
    contador++; //Se imprimirá el contador del 0 al 9
}

//Sintaxis do while
let numero = 0;

do{ // Con "do" mi código se ejecuta al menos una vez antes de evaluar la función del "while"
    console.log("Ejecuto mi programa al menos una vez");
    numero++;
}while(numero <= 7)

//Sintaxis For
let variable = 0;
for(let i = 1; i < 10; i++){
    variable += i
}

console.log("La suma total es: ", variable);



//For ejercicios
const numeros = [10, 15, 47, 80, 25];
for(let num of numeros){
    console.log(num); //Revisa todos los elemenos de mi array e imprime uno por uno
} //El profe recomienda usar el for of para recorrer arreglos

//Do while ejercicios
let respuesta;
do{ 
    respuesta = parseInt(prompt("Por favor ingresa un número mayor a 20"));//El parseInt es una función que me ayuda a que almacene sólo los datos que sean números
    //prompt nos permite que el usuario interactue con nuestra consola
}while (respuesta <= 20);

console.log(respuesta); //Coderunner no me va a permitir interactuar ya que son sólo salidas.


//while ejercicios
let text = "Este modulo es increible porque estoy aprendiendo a programar!!!"
let vocal = "aiueoAIUEO" //también podemos usar el "toUPERCASE"
let counter = 0;
let i = 0;

while(i < text.length){
    if (vocal.includes(text[i])) { //includes me permite saber si un elemento está dentro de un array
        counter++;//Si el elemento "i" de "text" está dentro del arreglo "vocal", entonces aumenta el contador +1
    }
    i++;
}

console.log("El texto tiene: ", counter , "vocales");






