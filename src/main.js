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

//contarSegundos(8);