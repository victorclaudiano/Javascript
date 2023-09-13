function imprimirNoConsole () {
    console.log("Ola mundo!!!")
}

imprimirNoConsole(); //chamar função 

function imprimirUmNumero (num) {
    console.log("o numero é:" + num);
}
imprimirUmNumero(2);
imprimirUmNumero(4);
imprimirUmNumero(7);
imprimirUmNumero(8);

const numeroAleatorio = function(){
    console.log(Math.random());
}
numeroAleatorio();
numeroAleatorio();
numeroAleatorio();