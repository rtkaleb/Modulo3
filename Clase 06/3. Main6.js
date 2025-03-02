
//document.getElementById("ejemplo").innerText = "Hola Mundo!"//Estoy manipulando mi archivo HTML desde JS!!

// console.log(document.documentElement); //Accediaendo al nodo html desde la consola del navegador
//console.log(document.head); //Accediendo al nodo head deasde la consola del navegador

let Título = document.getElementById("Título"); //Accedí a mi elemendo h1 mediante du Id y lo guardé en mi variable "Título"
Título.innerText = "Don Quijote de la Mancha"; //A mi variable "Título" le apliqué "innerText" para cambiar el texto de mi h1
Título.style.color = "blue"; //A mi variable "Título" le apliqué "style.color" para cambiar el color de mi h1 en CSS


let nuevoParrafo = document.createElement("p"); //Creé un nuevo elemento p y lo guardé en mi variable "nuevoParrafo"
nuevoParrafo.innerText = "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor."; //A mi variable "nuevoParrafo" le apliqué "innerText" para cambiar el texto de mi p
document.body.appendChild(nuevoParrafo); //A mi body le apliqué "appendChild" para agregar mi nuevo párrafo al final de mi body

//Este se va a eliminar porque se repite
let nuevoParrafo2 = document.createElement("p"); 
nuevoParrafo2.innerText = "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor."; 
document.body.appendChild(nuevoParrafo2); 

//Con esto lo eliminamos
nuevoParrafo2.remove(); //A mi nuevo párrafo 2 le apliqué "remove" para eliminarlo de mi body PARA ELEMENTO SELECCIONADO
//document.body.removeChild(nuevoParrafo2); //A mi body le apliqué "removeChild" para eliminar mi nuevo párrafo de mi body PARA UN ELEMENTO HIJO EN ESPECÍFICO


//Si el elemento a borrar no está insertado al final...
let nuevoParrafo3 = document.createElement("p");
nuevoParrafo3.innerText = "Párrafo a eliminar";
document.body.insertBefore(nuevoParrafo3, nuevoParrafo); //A mi body le apliqué "insertBefore" para agregar mi nuevo párrafo 3 antes de mi nuevo párrafo 

function retraso() {
    setTimeout(function(){
        nuevoParrafo3.remove(); //Se remueve después de 3 segundos
    }, 3000);
}

//retraso();

/*
document.getElementById("boton").addEventListener("click", function(){//Va a escuchar todos los eventos que el usuario va a realizar en el botón
    alert("Botón presionado!");//Va a mostrar un mensaje de alerta
});
*/

function agregaElementos(){
    let nuevoElemento = document.createElement("h3");
    nuevoElemento.innerText = "Año de publicación: 1605";
    document.body.appendChild(nuevoElemento); //Aparece un nuevo elemento en mi página cada que presiono el botón "Enviar"
}

const user = "admin";
const pass = "1234";

function LogIn(){
    let usuario = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(usuario === user && password === pass){
       // alert("Bienvenido " + usuario);
       window.location.href = "4. Bienvenido6.html"; //Redirecciona a la página de "Bienvenido" creada en clase
    } else {
        alert("Usuario o contraseña incorrectos");
    }

}

function mostrarTexto() {
    let userText = document.getElementById("texto").value;
    document.getElementById("mostrar").innerText = userText;
}


