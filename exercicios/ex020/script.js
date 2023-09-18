function tipoDado(dado) {
    if(typeof dado === 'string') {
        console.log("este dado é uma string");
    } else if(typeof dado === 'number'){
        console.log("este dado é uma number");
    } else if(typeof dado === 'boolean'){
        console.log("este dado é uma boolean");
    }

}

tipoDado(true);
tipoDado(23);
tipoDado("teste");