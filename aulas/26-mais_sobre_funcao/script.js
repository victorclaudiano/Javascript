function multiplicarTresNumeros(x,y,z){
    return x * y * z;
}

console.log(multiplicarTresNumeros(2,3,4));

const mult= multiplicarTresNumeros(5,4,8);

console.log("o valor de mult é " + mult);

function podeDirigir(idade, cnh) {
    if(idade >=18 && cnh == true){
        console.log("Voce pode digirir");
    } else {
        console.log("Não pode dirigir");
    }
}
console.log(podeDirigir(19,true));
console.log(podeDirigir(25,true));
console.log(podeDirigir(44,0));
console.log(podeDirigir(19,1)); //0 é false 1 é true
console.log(podeDirigir(17,false));