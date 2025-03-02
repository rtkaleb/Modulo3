
var globalVar = "Soy una variable global"

function saludar() {
    console.log(globalVar);
}
saludar();

//Función Scope (local)
function saludo(){ //Las variables creadas dentro de esta función son acceisibles SÓLO dentro de la función
    let mensaje = "Hola a todos!!"
    console.log(mensaje);
}
//console.log(mensaje); //Aquí colisiona porque no existe fuera de la función
saludo();

//Block Scope

if(true){
    let blockScope = "Sólo existe en este bloque"
    console.log(blockScope);
}
//console.log(blockScope) //Lo mismo  que en la anterior 

if(true){ 
    var blockScope = "Sólo existe en este bloque" //Lo solucionamos con Var, ya no se bloquea afuera de la función
    console.log(blockScope);
}
console.log(blockScope);

