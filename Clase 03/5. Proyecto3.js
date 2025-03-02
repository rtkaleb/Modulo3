//Clasificar las frutas por su tipo en un array
let frutasAcidas = [];
let frutasSemiacidas = [];          
let frutasDulces = [];
let frutasNeutras = [];
let frutas = ["Kiwi", "Limón", "Pomelo", "Naranja", "Manzana", "Uva", "Arándano", "Piña",
    "Fresa", "Membrillo", "Níspero", "Ciruela", "Melocotón", "Mango", "Mandarina", "Frambuesa",
    "Coco", "Aguacate", "Aceituna", "Almendra", "Avellana", "Cacahuete", "Nuez",
    "Plátano", "Cereza", "Higo", "Melón", "Sandía", "Pera", "Granada", "Chirimoya"]

for(let i = 0; i < frutas.length; i++){
    if(frutas[i] === "Kiwi" || frutas[i] === "Limón" || frutas[i] === "Pomelo" || frutas[i] === "Naranja" || frutas[i] === "Manzana" || frutas[i] === "Uva" || frutas[i] === "Arándano" || frutas[i] === "Piña"){
        console.log("Frutas ácidas: ", frutas[i]);
        frutasAcidas.push(frutas[i]);
    }else if(frutas[i] === "Fresa" || frutas[i] === "Membrillo" || frutas[i] === "Níspero" || frutas[i] === "Ciruela" || frutas[i] === "Melocotón" || frutas[i] === "Mango" || frutas[i] === "Mandarina" || frutas[i] === "Frambuesa"){
        console.log("Frutas semiácidas: ", frutas[i]);  
        frutasSemiacidas.push(frutas[i]);    
    }else if(frutas[i] === "Coco" || frutas[i] === "Aguacate" || frutas[i] === "Aceituna" || frutas[i] === "Almendra" || frutas[i] === "Avellana" || frutas[i] === "Cacahuete" || frutas[i] === "Nuez"){
        console.log("Frutas dulces: ", frutas[i]);
        frutasDulces.push(frutas[i]);
    }else if(frutas[i] === "Plátano" || frutas[i] === "Cereza" || frutas[i] === "Higo" || frutas[i] === "Melón" || frutas[i] === "Sandía" || frutas[i] === "Pera" || frutas[i] === "Granada" || frutas[i] === "Chirimoya"){
        console.log("Frutas neutras: ", frutas[i]);
        frutasNeutras.push(frutas[i]);    
    }
}
const objeto = { //almacena la cantidad de cada tipo de fruta
    acidas: frutasAcidas.length,
    semiAcidas: frutasSemiacidas.length,
    dulces: frutasDulces.length,    
    neutras: frutasNeutras.length
};
console.log(objeto);
