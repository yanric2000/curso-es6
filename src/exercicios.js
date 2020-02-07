// Exercícios do Modulo 1

// 1
class User {
    constructor (email = '', password = '') {
        let _email = email;
        let _password = password;
        let _isAdmin = false;

        this.setEmail = (email) => {
            _email = email;
        }

        this.getEmail = () => {
            return _email;
        }

        this.setPassword = (password) => {
            _password = password;
        }

        this.getPassword = () => {
            return _password;
        }

        this.isAdmin = () => {
            return _isAdmin;
        }
    }
    
}

class Admin extends User {
    constructor(email = '', password = '') {
        super(email, password);

        this.isAdmin = () => {
            return true;
        }
    }
}

const usuario = new User('joao@hotmail.com', '123');
const admin = new Admin('yan@hotmail.com', 'abc');

//console.log(usuario.isAdmin());
//console.log(admin.isAdmin());

// 2.1

const usersList = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const usersAge = [];

usersList.map((user) => {
    usersAge.push(user.idade);
});

//console.log(usersAge);


// 2.2

const usersFilter = usersList.filter(user =>
    user.idade >= 18 && user.empresa === 'Rocketseat'
);

//console.log(usersFilter);

// 2.3

const usersFind = usersList.find(user =>
    user.empresa === 'Google'
);

//console.log(usersFind);


// 2.4

usersList.map((user) => {
    user.idade = user.idade * 2;
});

const usersUnder50 = usersList.filter((user) => user.idade <= 50);

//console.log(usersUnder50);


//3.1

const arr = [1, 2, 3, 4, 5];

arr.map((item) => {
    return item + 10;
});

// 3.2

const usuario2 = { nome: 'Diego', idade: 23 };

const mostraIdade = (usuario) => {
    return usuario.idade;
}

//console.log(mostraIdade(usuario2));


// 3.3

const nome2 = "Diego";
const idade2 = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => {
    return { nome, idade };
}

//console.log(mostraUsuario(nome2, idade2));
//console.log(mostraUsuario(nome2));


// 3.4

const promise = () => {
    return new Promise((resolve, reject) => {
        return resolve('ok');
    });
}

//console.log(promise);


// 4.1

const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const { nome, endereco:{cidade, estado} } = empresa;
/*
console.log(nome);
console.log(cidade);
console.log(estado);
*/

// 4.2

function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo({ nome: 'Diego', idade: 23 }));
   

// Exercícios do Modulo 3