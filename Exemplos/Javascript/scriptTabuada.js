// TABUADA

// Declarando a função
function calculaTabuada(){
    
    // Obtendo do DOM o tbody da tabela
    let tabuada = document.querySelector('#tabuada tbody');

    // Puxando do input o valor da variavel valorA e convertendo para inteiro
    let valorA = parseInt(document.querySelector('#valorA').value);

    // Limpando o conteudo do tbody
    tabuada.innerHTML = '';

    // Criando um laço de repetição de 0 a 10
    for (let valorB = 0; valorB <= 10; valorB++){
        // Result recebe a multiplicação entre valorA e valorB
        let result = valorA * valorB;
        //Criando o template das colunas da linha atual
        let template = `
                <td>${valorA}</td>
                <td>x</td>
                <td>${valorB}</td>
                <td>=</td>
                <td>${result}</td>
        `;
        //Criando o elemento tr
        let tr = document.createElement('tr');
        //Inserindo as colunas na linha
        tr.innerHTML = template;
        //Inserindo a linha na tabela
        tabuada.append(tr);

    };
};
//Chamando nossa função
calculaTabuada();
//Pegando o evento de alteração do id valorA
document.querySelector('#valorA').addEventListener('change', calculaTabuada);