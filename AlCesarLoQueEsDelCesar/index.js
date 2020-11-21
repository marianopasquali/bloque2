const abecedario = "abcdefghijklmnñopqrstuvwxyz";
const AbcArray = abecedario.split("");
const numeros = "0123456789";
const NUMEROSARRAY= numeros.split("");






const Minusculas = (string)=>{

    const convertir = string.toLowerCase();

    return convertir;

}

const StringToArray=(string)=>{

    const Array=string.split("");

    return Array;


}

const Cesar = (array) =>{

    const CesarArray=[];

    const AlgSuma = 5;

        for(i=0;i<array.length;i++){

            

            for(z=0;z<abecedario.length;z++){

                let posicion = z + AlgSuma;
                let posicion2 = (z + AlgSuma)-abecedario.length;
                
                ((array[i]===abecedario[z]) && (posicion<=abecedario.length))? CesarArray.push(abecedario[posicion]):null;

                ((array[i]===abecedario[z]) && (posicion>abecedario.length))? CesarArray.push(abecedario[posicion2]):null;

                
               

            }

            for (j=0;j<NUMEROSARRAY.length;j++){

                (array[i]===NUMEROSARRAY[j])?CesarArray.push(NUMEROSARRAY[j]):null;

            }


                (array[i]===" ")?CesarArray.push(array[i]):null;

                (array[i]===",")?CesarArray.push(array[i]):null;

                (array[i]===".")?CesarArray.push(array[i]):null;

                (array[i]==="-")?CesarArray.push(array[i]):null;

                (array[i]==="_")?CesarArray.push(array[i]):null;

                


        }

    return CesarArray;


}


const Unir=(array)=>{

const ArrayJoin = array.join("");

return ArrayJoin;

}

