function lembrarSoma(x){
    return function(y) {
    return x + y;
    }
}  
//faz a função lembrar do escopo
let soma1 = lembrarSoma(2);

console.log(soma1(5));

let soma2 = lembrarSoma(5);

console.log(soma2(7));