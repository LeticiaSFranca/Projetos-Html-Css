let btnEnviar = document.querySelectorAll('#botoes button')[0];
let btnExcluir = document.querySelectorAll('#botoes button')[1];
let btnEditar = document.querySelectorAll('#botoes button')[2];

let nome = document.querySelectorAll('#wrap input')[0];
let quantidade = document.querySelectorAll('#wrap input')[1];
let dia = document.querySelectorAll('#wrap select')[2];
let select = document.getElementById("dia-semana");

let tabela = document.querySelector('#saida table');
let BD = [];

//btnEnviar.addEventListener('click', cadastrar)
//function cadastrar(){
//métodos
btnEnviar.onclick = function(){

    let produto = new Object();
    produto.nome = nome.value;
    produto.quantidade = quantidade.value;
    produto.dia = select.value;

    produto.id = BD.length;
    BD.push(produto);

    if(produto.nome && produto.quantidade && produto.dia != ""){
        tabela.innerHTML += `<tr><td><input type="checkbox" id="${produto.id}" onchange="verificar(this.id)"></td><td>${produto.nome}</td><td>${produto.quantidade}</td><td>${produto.dia}</td></tr>`;
    }

    else{
        alert('Há campos vazios.')
    }
}

btnExcluir.onclick = function(){
    for (let i = 0; i < BD.length; i++){
        let elemento = document.querySelectorAll('#saida table tr td input')[i];
        if (elemento.checked){
            BD.splice(elemento.id, 1);
            tabela.innerHTML = `<tr><td width="30px"></td><td>Nome</td><td>Quantidade</td><td>Dia</td></tr>`;
            montarTabela();
        }
    }
}

function montarTabela(){
    for (let i = 0; i < BD.length; i++){
        tabela.innerHTML += `<tr><td width="30px"><input type="checkbox" id="${i}" onchange="verificar()"></td><td>${BD[i].nome}</td><td>${BD[i].quantidade}</td><td>${BD[i].dia}</td></tr>`;
    }
}

btnEditar.onclick = function(){
    for (let i = 0; i < BD.length; i++){
        let elemento = document.querySelectorAll('#saida table tr td input')[i];
        if (elemento.checked){
            BD[i].nome = nome.value;
            BD[i].quantidade = quantidade.value;
            BD[i].dia = select.value;

            tabela.innerHTML = `<tr><td width="30px"></td><td>Nome</td><td>Quantidade</td><td>Dia da Semana</td></tr>`;
            montarTabela();
        }
    }    
}

function verificar(id){
    let cont = 0;
    for (let i = 0; i < BD.length; i++){
        let elemento = document.querySelectorAll('#saida table tr td input')[i];
        if (elemento.checked){
            nome.value = BD[i].nome;
            quantidade.value = BD[i].quantidade;
            select.value = BD[i].dia;

            cont++;
            if (cont > 1){
                alert('Selecione um produto por vez.');
                elemento.checked = false;
                break;
            }
        }
    }
}