//OBJETOS
//Un objeto es una colección de datos relacionados y/o funcionalidad.
//Es una representacion abstracta de una cosa de la vida real.
//Los objetos se manejan con propiedades, y las propiedades son una combinacion de palabras clave y valores.
//Las llaves indican desde donde inicia y donde termina el objeto. {...}
//Los números de funcionan como valor, se manejan como datos numéricos, no como string.
//Al igual que los números, los datos booleanos también se manejan como booleans, no como strings.

//SYNTAX:
//Están conformados por propiedades y su valor; siendo representados en el ejemplo, las *propiedades* como *palabraClave* y su valor.
var objeto = {
    palabraClave: "valor",
    palabraClave2: 40,
    palabraClave3: "valor 3"
};


//EXAMPLE:
let miAuto = {
    color: "Amarillo",
    puertas: 5,
    marca: "Jeep",
    annio: 2016
};

//Para utilizar las variables que se encuentran dentro del objeto:

miAuto.color; //Amarillo
miAuto.puertas; //5
miAuto.annio; //2016
console.log(miAuto.marca); //Jeep


//EXAMPLE2:
let objetoLula = {
    ser: "can",
    color: "sal y pimienta",
    nombre: "Lulú",
    edad: 9,
    peso: 11
};

console.log(`Tengo una ${objetoLula.ser} llamada ${objetoLula.nombre}, ella es de color ${objetoLula.color}, pesa ${objetoLula.peso} kilos y tiene ${objetoLula.edad} años de edad.`);
//Tengo una can llamada Lulú, ella es de color sal y pimienta, pesa 11 kilos y tiene 9 años de edad.