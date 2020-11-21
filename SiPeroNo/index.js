/* [SiPeroNo]​ Crear una función que reciba dos arrays de números y retorne un nuevo
array con los elementos que se encuentren en el primer array, pero no en el
segundoNota; Esto se llama "resta" entre conjuntos
Ejemplo:[5,1,2,3,4] y [3,4] debería devolver [5,1,2]




*/

const SiPeroNo = (array1,array2)=>{


    const ArrayLimpio = [];

    let Verdad = false;

    for(let i=0;i<array1.length;i++){

            for(let z=0;z<array2.length;z++){

                (array1[i]!=array2[z])?null:Verdad=true;

            }

            if(Verdad!=true){

                ArrayLimpio.push(array1[i]);

            }

            Verdad=false;

    }
    

    return ArrayLimpio;


}



