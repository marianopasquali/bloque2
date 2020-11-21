/* 

[Filter]​ Crear una función que reciba un array de números como argumento y
retorne un array con los elementos distintos
Ejemplo:

[1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]

*/

const SinRepetidos = (array)=>{


    const ArrayLimpio=[];

for (i=0;i<array.length;i++){

    ArrayLimpio.includes(array[i])?null:ArrayLimpio.push(array[i]);


}

return ArrayLimpio;

}


