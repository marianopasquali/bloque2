/*

7. [NoLength]​ Crear una función que retorne la cantidad de caracteres de un texto.
a. Nota: Esto es posible hacerlo dentro de javascript con .length. Implementar
un ciclo para resolver el problema.

*/


const DividirString =(string) => {

const dividido=string.split("");

return dividido;


}


const ContarCaracteres = (array) =>{

let acumulador = 0;

let stop = "";

for(i=0;stop!="stop";i++){

(array[i]===undefined)?(stop="stop"):acumulador++;

    
}

return acumulador;


}