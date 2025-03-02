//Función anónima
const anonima = function(){
    console.log("Hola a todos!");
}
anonima();

//Callback
setTimeout(function(){
    console.log("Este comentario va a tener un tiempo de espera")
}, 5000); //Le indicamos que se esperará 5 segundos para desplegar la función

//Arrow Function
const arrowFunction = () => {
    console.log("Hola, eres una flecha =>")
}
arrowFunction();

document.getElementById("button").addEventListener("click", function() {
    alert("Hola, soy un callback");
}); //El evento click es un callback