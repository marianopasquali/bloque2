const NumeroMayor = (number)=>{

const Numeros=[];

for(let i=0;i<number;i++){

    Numeros.push(parseInt(prompt(`Ingresa el ${i+1}° numero`)));
    
}

const Mayor = Math.max(...Numeros);

return Mayor;



}