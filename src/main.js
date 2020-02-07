import api from './api';

class App {
    constructor() {
        this.repositories = [];
        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');
        this.inputEl = document.querySelector('input[name=repository]');
        this.registerHandler();
    }

    registerHandler() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    async addRepository(event) {
        event.preventDefault();

        const repoName = this.inputEl.value;

        if(repoName.length === 0)
            return;

        this.setLoading();

        try {
            const response = await api.get(`/repos/${repoName}`);
            const { name, description, html_url, owner: { avatar_url } } = response.data;

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url
            });
    
            this.inputEl.value = '';
    
            this.render();

        } catch (error) {
            alert('O repositório não existe.');
        }

        this.setLoading(false);
    }

    render(data){
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.innerText = repo.name;

            let descriptionEl = document.createElement('p');
            descriptionEl.innerText = repo.description;

            let urlEl = document.createElement('a');
            urlEl.setAttribute('href', repo.html_url);
            urlEl.setAttribute('target', '_blank');
            urlEl.innerText = 'Acessar';

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(urlEl);

            this.listEl.appendChild(listItemEl);
        });
    }

    setLoading(loading = true){
        if(loading === true){
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando...'));
            loadingEl.setAttribute('id', 'loading');
            
            this.formEl.appendChild(loadingEl);
        }else{
            document.getElementById('loading').remove();
        }
    }
}

new App();