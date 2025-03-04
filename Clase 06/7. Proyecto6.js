//Crear una caja de comentarios donde los usuarios puedan escribir y agregar comentarios que se muestran en la página. 
// Este proyecto ayudará a los estudiantes a manejar eventos de formularios y modificar el contenido de una página.

//Instrucciones:
//Crea un formulario con un input para el nombre y un textarea para el comentario.  
//Crea un botón de enviar.
//Crea un div en el que se mostrarán los comentarios.
//Cuando el usuario envíe el formulario, el comentario debe agregarse al div de comentarios.
//El comentario debe mostrarse con el nombre del usuario y el comentario.
//El formulario debe limpiarse después de enviar el comentario.


//Solución:

let Título = document.getElementById("Título"); 
Título.innerText = "Esta página es para comentarios";

<section class="comment-container">
        <h2>Comentarios</h2>
        <p id="user-info"></p>
        <textarea placeholder="Publica un comentario" id="comment"></textarea>
        <button onclick="postComment()">Publicar</button>

        <section id="comment-section"></section>
    </section>

/*
let formulario = document.getElementById("formulario");
let comentarios = document.getElementById("comentarios");

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let comentario = document.getElementById("comentario").value;

    let nuevoComentario = document.createElement("div");
    nuevoComentario.innerHTML = `<h3>${nombre}</h3><p>${comentario}</p>`;
    comentarios.appendChild(nuevoComentario);
    formulario.reset();
});

/*function(){
    let fecha = new Date();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let tiempo = document.getElementById("tiempo");
    tiempo.innerText = hora + ":" + minutos + ":" + segundos;

    document.appendChild(tiempo);




}

*/
