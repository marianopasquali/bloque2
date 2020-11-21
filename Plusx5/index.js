const Sumatoria = (number) =>{

let Suma=0;

for(i=0;i<number;i++){

Suma+=parseFloat(prompt(`Ingrese el ${i+1}° numero`));


}

return Suma;

}