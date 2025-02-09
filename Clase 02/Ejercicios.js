//¿Es par o es impar?
let valorRandom = Math.floor(Math.random() * 101);
if ((valorRandom%2)>0){
    console.log(valorRandom, "Es impar");
} else {
    console.log(valorRandom, "Es par");
}

//¿Es primo?
function esPrimo(num) {
    if (num < 2) return false;
    for (let i=2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const numero = Math.floor(Math.random()*100) + 1;
console.log(`${numero} es ${esPrimo(numero) ? "primo" : "compuesto"}`);

//¿Qué estación del año es?
let estacion = Math.floor(Math.random() * 12) + 1;
console.log("¿Qué número de mes es?", estacion);

if (estacion > 11 || estacion <3){
    console.log("Es invierno");
} else if (estacion > 2 || estacion <6){
    console.log("Es primavera");
} else if (estacion > 5 || estacion <9){
    console.log("Es verano");
} else {
    console.log("Es otoño");
}


