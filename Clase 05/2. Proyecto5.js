//Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.
class Libro{
    constructor(titulo, autor, año, estado){
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
        this.estado = estado;
    }
    method(){
        console.log(`Libro titulado ${this.titulo} escrito por ${this.autor} en el año ${this.año} y el estado es ${this.estado}`);
    }
}
const libro1 = new Libro("El principito", "Antoine de Saint-Exupéry", 1967, "Disponible");
libro1.method(); //Libro titulado El principito escrito por Antoine de Saint-Exupéry en el año 1943 y el estado es Prestado
const libro2 = new Libro("100 años de soledad", "Gabriel García Márquez", 1943, "Prestado");
libro2.method();
const libro3 = new Libro("In ne faut rien dire", "Marielle Hubert", 2024, "Prestado");
libro3.method();
const libro4 = new Libro("Calculus", "Michael Spivak", 1965, "Disponible");
libro4.method();
const libro5 = new Libro("Álgebra", "Aurelio Baldor", 1941, "Prestado");
libro5.method();