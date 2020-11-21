const TextToArray = (string) => {


    const Array = string.split("");

    return Array;

}


const CountSpaces = (array) => {


 let Count = 0;

 for (i=0;i<array.length;i++){


    (array[i]===" ")?Count++:null;
 

 }

 return Count;

}