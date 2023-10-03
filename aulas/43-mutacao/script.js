//um obj pode herdar todas as caracteristicas do outro, virando uma referencia ao mesmo

let pessoa = {
    nome:'vitor',
}

let pessoa2 = pessoa;

console.log(pessoa == pessoa2);

pessoa2.nome = "pedro";

console.log(pessoa.nome);

pessoa.nome = "maria";

 console.log(pessoa2.nome);