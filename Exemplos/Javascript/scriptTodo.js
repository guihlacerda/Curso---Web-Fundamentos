// Criando JSON para criar um array com id e title
let data = [];

function renderTodo() {

    document.querySelector('.todo').innerHTML = '';

// Percorrendo cada posição do Array com o forEach 
data.forEach(task => {
    // Criando um elemento para li
    let li = document.createElement('li');
    /* Pegando meu elemento li e jogando no meu HTML montando meu template automaticamente 
    percorrendo cada elemento do meu JSON, passando o valor do meu id e title.
    */
    li.innerHTML = `
        <input type="checkbox" id="task-${task.id}">
        <label for="task-${task.id}">${task.title}</label>
        <button type="button">x</button>
    `
    // Buscando nosso input quando ele for alterado
    li.querySelector('input').addEventListener('change', e => {
        // Validando se o input foi alterado, se sim .. add a class complete. Senão remove a class complete
        if (e.target.checked){
            li.classList.add('complete');
        } else {
            li.classList.remove('complete');
        }

    });
    
    //Buscando no button um evento de click
    li.querySelector('button').addEventListener('click', e => {
        // Após captar o evento, buscamos o alvo que vamos usar
        let button = e.target;
        // Pegamos o parâmetro parentNode
        let li = button.parentNode;
        // Buscamos o input 
        let input = li.querySelector('input');
        let id = input.id;
        let idArray = id.split('-');
        let todoId = idArray[1];
        let title = li.querySelector('label').innerText;

        if (confirm(`Deseja realmente excluir a tarefa ${title}?`)) {
            
            data = data.filter(task => task.id !== parseInt(todoId));

            renderTodo();
        }

    });

    document.querySelector('.todo').append(li);
});
};

document.querySelector('#new-task').addEventListener('keyup', e => {
    if (e.key === 'Enter'){

        data.push({
            id: data.length+1,
            title: e.target.value
        });
        e.target.value = "";
        renderTodo();
    }
});

renderTodo();
