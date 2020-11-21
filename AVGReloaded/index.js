const Promedio = (number) => {

    let Acumulador = 0;

    for (let i=0;i<number;i++){

        Acumulador += parseInt(prompt(`Ingresa el ${i+1}° numero`));

    }

    const promedio = Acumulador/number;

    return promedio;

}