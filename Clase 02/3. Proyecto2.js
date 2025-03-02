let nota = Math.floor(Math.random() * 100)+1;
console.log("Tu nota es", nota);
if(nota >= 90) {
    console.log("Aprobaste con Excelente");
} else if (nota >=75 && nota <=89){
    console.log("Aprobaste con Bien");
} else if (nota >=60 && nota <=74){
    console.log("Aprobaste con Suficiente");
} else console.log("Estas reprobado");