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

//const { nome, endereco:{cidade, estado} } = empresa;
/*
console.log(nome);
console.log(cidade);
console.log(estado);
*/

// 4.2

const userObj = { nome: 'Diego', idade: 23 };

function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
}

//console.log(mostraInfo(userObj));

// 5.1

const array = [1, 2, 3, 4, 5, 6];
const [ firstItem, ...arrayLeft] = array;

//console.log(firstItem, arrayLeft);

const somar = (...lista) => {
    return lista.reduce((total, next) => total + next);
}

//console.log(somar(1, 2, 3, 4));


// 5.2

const userDefault = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const userGabriel = {...userDefault, nome: 'Gabriel'};
const endereco = {...userDefault.endereco, cidade: 'Lontras'};
const userLontras = {...userDefault, endereco};

//console.log(userGabriel);
//console.log(userLontras);

// 6

const dado1 = 'Diego';
const dado2 = 23;

//console.log(`O usuário ${dado1} possui ${dado2} anos`);


// 7

const x = 'Diego';
const y = 23;

const test = {
    x,
    y,
    cidade: 'Rio do Sul',
};

//console.log(test);



/**********************************************************/



// Exercícios do Modulo 2

// 1.1

import Usuario, { idade as idadeImport } from './funcoes';

//Usuario.info();

//console.log(idadeImport);

// Exercícios do Modulo 3

import axios from 'axios';

class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`)
            console.log(response);
        } catch (err) {
            console.warn('Erro na api');
        }
    }

    static async getCepInfo(cep) {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            console.log(response);
        } catch (err) {
            console.warn('Erro na api');
        }
    }

    static async requisicoes(){
        try {
            let [someResult, anotherResult] = await Promise.all([
                axios.get(`https://viacep.com.br/ws/88350201/json/`),
                axios.get(`https://api.github.com/users/yanric2000`)
            ]);
            const response = [someResult, anotherResult]; 
            console.log(response);
        } catch (err) {
            console.warn('Erro na api');
        }
    }
}

//Api.getCepInfo(88350201);

const delay = () => new Promise( (resolve, reject) => {
    setTimeout( () => { resolve('segundos') }, 1000 );
});

async function contarSegundos(segundos){
    for (let index = 0; index < segundos; index++) {
        console.log(`${index+1} ${await delay()}`);
    }
}

//contarSegundos(5);

class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log(response);
        } catch (err) {
            console.log('Repositório não existe');
        }
    }
}

//Github.getRepositories('rocketseat/ambiente-react-native');
//Github.getRepositories('rocketseat/dslkvmskv');

const buscaUsuario = async (usuario) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(response);
    } catch (err) {
        console.log('Usuário não existe');
    }
}

//buscaUsuario('diego3g');