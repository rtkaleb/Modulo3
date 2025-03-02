//Función sin parámetro
function saludar(){
    console.log("Hola mundo!");
} //Defino mi función
saludar(); //La mando a llamar

//Funcion con parámetros
function saludarAlguien(nombre){
    console.log("Hola", nombre);
}
saludarAlguien("Kaleb");

//Función con valor por defecto
function saludarInvitado(nombre = "invitado"){ //Le doy un valor por si no especifico argumentos para los parámetros
    console.log("Hola, Bienvenido", nombre);
}
saludarInvitado("María"); //Mi argumento para mis parámetros es "María"

//Función retorna
function multiplicar(a, b){
    return a*b;
}
let resultado = multiplicar(63,5);
console.log(resultado); //Defino variable "resultado" previamente para que me muestre el resultado de la multiplicación
console.log(multiplicar(5,5)); //Directo imprimo el resultado de mi función

