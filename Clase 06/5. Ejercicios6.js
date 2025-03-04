//Cambio de color de texto cuando presiono el botón
let Título = document.getElementById("Título"); 
Título.innerText = "Texto que cambiará de color"; 

function generarColorAleatorio() { // Genera un color en formato hexadecimal

    let letras = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
  }


function cambioDeColor() {
    Título.style.color = generarColorAleatorio();
}
  

//Crear un botón que permita ocultar o mostrar un párrafo cada vez que se presiona

let nuevoParrafo = document.createElement("p"); //Creo mi elemento p
nuevoParrafo.id = "miTexto"; //Le asigno un id
nuevoParrafo.style.display = "none"; //Lo oculto
nuevoParrafo.innerText = "Texto a eliminar o aparecer"; //Le asigno un texto
document.body.appendChild(nuevoParrafo) //Lo agrego a mi body

function ocultaTexto() {
    let texto = document.getElementById("miTexto");
    if (texto.style.display === "none") {
      texto.style.display = "block"; // Muestra el texto
    } else {
      texto.style.display = "none"; // Oculta el texto
    }
  }

/*
let nuevoParrafo = document.createElement("p"); //Creo mi elemento p
nuevoParrafo.id = "miTexto"; //Le asigno un id
nuevoParrafo.classList.add("oculto"); //Le asigno una clase
nuevoParrafo.style.display = "none"; //Lo oculto
nuevoParrafo.innerText = "Texto a eliminar o aparecer"; //Le asigno un texto
document.body.appendChild(nuevoParrafo) //Lo agrego a mi body

function ocultaTexto() {
    document.getElementById("miTexto").classList.toggle("oculto");
  }
*/

//Contador de clicks

let cuentaclicks = document.createElement("h1");
document.body.appendChild(cuentaclicks);
let contador = 0;

function contadors() {
    contador++;
    cuentaclicks.innerText = "Clicks: " + contador;

}


