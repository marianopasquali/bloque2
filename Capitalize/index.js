
const TextToArray = (string) =>{

    const Array = string.toLowerCase().trim();

    const Array2 = Array.split("");

    return Array2;



}

const Capitalize = (array)=>{


    const Arraycapitalized = [];

    let LetterToCapitalize ="";



    Arraycapitalized.push(array[0].toUpperCase())

        for (i=1;i<array.length;i++){


            (array[i-1]===" ")?Arraycapitalized.push(array[i].toUpperCase()):Arraycapitalized.push(array[i]);


        }

        return Arraycapitalized;

}

const ArrayToString = (array) => {


    const String = array.join("");


    return String;

}