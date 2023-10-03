//objeto - > podemos copiar e herdar dados de um objeto para outro "assing"
//objeto -> podemos adicionar e deletar propriedades no nosso programa

//[] = array

// {} = objeto

 let carro = {
    portas: 2,
    portamalas:'200l',
    motor: "2.0",
 }

 let adcionais = {
    tetosolar: true,
    arcondicionado: true,
 }
 
 console.log(carro);

 Object.assign(carro, adcionais);

 console.log(carro);

