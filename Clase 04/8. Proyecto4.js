//Crea un sistema muy sencillo para hacer seguimiento de los libros que has leído.

function agregarLibro(){
    let libros=[]; //Se declara fuera del bucle para que no se reinicie cada vez que se agrega un libro
    do{
        let a = prompt("Por favor ingresa el título de un libro que has leído"); 
        if (a){
        libros.push(a); //Sólo agrega si el usuario ingresa un valor
        }
    }while(confirm("¿Quieres agregar otro libro?"));
    return libros;
}
let misLibros = agregarLibro();
console.log("Lista de libros ingresados:", misLibros);


/*
function agregarLibro(titulo){
    let librosLeidos=[]; 
    do{
        let a = prompt("Por favor ingresa el título de un libro que has leído"); 
        if (a){
        librosLeidos.push(a);
        }
    }while(confirm("¿Quieres agregar otro libro?"));

    }
    librosLeidos.push(titulo); 
    return librosLeidos;
}
do{
    let a = prompt("Por favor ingresa el título de un libro que has leído"); 
    if (a){
    librosLeidos.push(a); 
    agregarLibro(a);
    }
}while(confirm("¿Quieres agregar otro libro?"));  


function mostrarLibrosLeidos(){
    for(let i=0; i<librosLeidos.length; i++){
        console.log(i+1, librosLeidos[i]);
    }
}
mostrarLibrosLeidos();
//console.log("Lista de libros ingresados:", misLibros);
console.log("Lista de libros ingresados:", librosLeidos);


*/
