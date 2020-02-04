const lista = [1, 2, 2, 3, 4, 12, 6, 22, 11];


// Percorre o array passando o valor e o index

const novaLista = lista.map(function(item, index){
    return item + index;
});

console.log(novaLista);


// Reduz o array para um unico valor
// geralmente um numero

const soma = lista.reduce(function(total, proximoValor){
    return total + proximoValor;
});

console.log(soma);


// Retorna apenas os valores que derem "match"
// dentro do array

const filtro = lista.filter(function(item){
    return (item%2 === 0);
});

console.log(filtro);


// Busca por um index com valor X
// Retorna o valor buscado ou undefined

const busca = lista.find(function(item){
    return item === 2;
});

console.log(busca);