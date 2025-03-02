const persona = { //Se puede con let también, pero normalmente se define con const porque se usa una sóla vez
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25,
    ciudad: "Orizaba",
    direccion: {
        calle: 'Calle Falsa',
        numero: 123
    }
}
console.log(persona);

//Modificción de valores
persona.ciudad = "Orizaba"; //Añadimos propiedad "ciudad" a objeto
console.log(persona);

//Añadir valores
persona.genero = "Masculino"; //Añadimos propiedad "genero" a objeto
persona.estatura = 1.70; //Añadimos propiedad "estatura" a objeto
console.log(persona);

//Eliminar valores
delete persona.estatura; //Eliminamos propiedad "estatura" a objeto
console.log(persona);

//Objetos con métodos	
const coche = {
    marca: 'Chevrolet',
    modelo: 'Camaro',
    año: 2019,
    
    arrancar: function() {
        console.log("Arrancando el coche"); //Método arrancar
    }
    }
console.log(coche); //Mostramos el objeto coche
coche.arrancar(); //Llamamos al método arrancar

//Objetos con métodos2.0
//Las funciones no funcionan (valga la redundancia) fuera de un objeto a menos que añada parámetros
const coch = {
    marca: 'Chevrolet',
    modelo: 'Camaro',
    año: 2019,
    
    arrancar: function(marca) {
        console.log("Arrancando el coche", marca); //Método arrancar
    }
    }
console.log(coch); //Mostramos el objeto coche
coche.arrancar(coch.marca); //Llamamos al método arrancar

//Método abreviado
const calculadora = {
    sumar: function(a,b){
        return a+b;
    },
    restar: function(a,b){
        return a-b;
    },
    multiplicar: function(a,b){
        return a*b;
    },
    dividir: function(a,b){
        return a/b;
    }
} //Aquí tenemos varios métodos en un sólo objeto que podemos decidir al mandar a llamar
console.log(calculadora.sumar(5,5));
console.log(calculadora.restar(5,5));   
console.log(calculadora.multiplicar(5,5));
console.log(calculadora.dividir(5,5));

//Anidados
const persona2 = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25,
    ciudad: "Orizaba",
    direccion: {
        calle: 'Calle Falsa',
        numero: 123,
        coordenadas: {
            lat: 14.12345,
            lng: 34.12345
        }
    }
}
//console.log(persona2);
//console.log(persona2.direccion);
//console.log(persona2.direccion.coordenadas);
//console.log(persona2.direccion.coordenadas.lat);
console.log(persona2["direccion"]["calle"]); //Forma de acceder a un objeto anidado

//Modificar métodos anidados
persona2.direccion.calle = "Calle Verdadera";
console.log(persona2);

//This
//Es una palabra reservada que hace referencia al objeto actual
const usuario = {
    nombre: 'Juan',
    saludar: function(){
        console.log(`Hola, soy ${nombre}`)
    }
}

usuario.saludar(); //No funciona porque no se especifica que es el nombre de usuario
//Debemos agregar "this" para que funcione
const usuario2 = {
    nombre: 'Juan',
    saludar: function(){
        console.log(`Hola, soy ${this.nombre}`)
    }
}
usuario2.saludar(); //Ahora sí funciona

//Las clases crean una plantilla para crear objetos
//Las clases son funciones constructoras
class persona3{
    nombre;
    apellido;
    edad;
} //Se crea plantilla para el objeto, más no el objeto aún


//Molde de objetos
class persona4 {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    //Creo función para saludar
    saludar(){
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }
} //Me estoy referenciando a mi mismo

const personaKaleb = new persona4("Kaleb", 25); //Aquí estoy creando un nuevo objeto en base a mi plantilla
personaKaleb.saludar(); //Llamo a mi función saludar

//Herencia
class persona5 { //Padre
    constructor(nombre, edad, género){
        this.nombre = nombre;
        this.edad = edad;
        this.género = género;
    }
    
    saludar(){
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }
}

class Estudiante extends persona5{ //Hijo
    constructor(nombre, edad, género, carrera, promedio){
        super(nombre, edad, género); //Heredo propiedades de mi padre con la palabra reservada "super"
        this.carrera = carrera;
        this.promedio = promedio;
    }
    estudiar(){
        console.log(`${this.nombre} está estudiando ${this.carrera}`);
    }
}

const Kaleb = new Estudiante("Kaleb", 25, "Masculino", "Ingeniería en Sistemas", 9.5);
Kaleb.saludar();
Kaleb.estudiar();