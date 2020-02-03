class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{
    constructor() {
        // Chamando o constructor da classe pai, boa pratica
        super();
    }
}

var myTodoList = new TodoList();

document.getElementById('addTodo').onclick = function(){
    myTodoList.add('New Todo');
}



class Matematica {
    constructor() {
        this.tarefas = [];
    }

    // metodo que apenas retorna valores estaticos
    // independente do resto da classe
    static soma(a, b) {
        console.log(a + b);
        return a + b;
    }
}

Matematica.soma(1, 2);