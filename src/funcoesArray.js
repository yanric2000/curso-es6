const lista = [1, 2, 4, 5, 10];

// Percorre o array passando o valor e o index

const novaLista = lista.map((item, index) => item + index);


// Reduz o array para um unico valor
// geralmente um numero

const soma = lista.reduce((total, proximoValor) => {
    return total + proximoValor;
});


// Retorna apenas os valores que derem "match"
// dentro do array

const filtro = lista.filter(item => item%2 === 0);

// Busca por um index com valor X
// Retorna o valor buscado ou undefined

const busca = lista.find(item => item === 2);
