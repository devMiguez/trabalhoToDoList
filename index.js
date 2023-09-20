//ToDo-List
alert("BEM VINDO À SUA ToDO-list")
let lista = [];
let listaCompleta = "";
let lixeira = [];
let lixeiraCompleta = " ";


function menu(){
    let escolha;

    while(escolha != 0){
        escolha = parseInt(window.prompt(" - Menu - \n1 - Adcionar tarefa\n2 - Ver tarefas\n3 - Excluir tarefa\n4 - ver lixeira\n0-sair"))
        
        switch (escolha) {
            case 1:
                addTarefa();
                break;
            case 2:
                alert(listaItens())
                break;
            case 3:
                deletaTarefa();
                break;
            case 4:
                verLixeira();
                break;
            case 0:
                alert("Saindo :(")
                break;
            default:
                alert("Digite um número válido!!!!!!!!")
                menu();
                break;
        }
    }


}

function addTarefa(){
    let digiteTarefa;

    digiteTarefa = window.prompt("Digite a tarefa que deseja inserir à lista: ")
    lista.push(digiteTarefa)
    alert("Tarefa adcionada a lista!!")

}

function listaItens(){
    listaCompleta = "";
    for (let i = 0; i < lista.length ; i++){
        listaCompleta = listaCompleta + (i+1) + "-" + lista[i]  + "\n"
    }
    return listaCompleta;
}

function deletaTarefa(){
    let deletaItem;

    deletaItem = parseInt(window.prompt("Qual tarefa você deseja deletar? " + "\n" + listaItens()))
    
    if((deletaItem < 1) || (deletaItem > lista.length)){
        alert("Insira um item existente!!")
        deletaTarefa();
    }else{
        lista.splice((deletaItem - 1), 1);
        listaCompleta = "";
        alert("Tarefa deletada!! ");
        menu();
    }
    
}
 function verLixeira(){

    lixeira.push(deletaItem)

    alert (lixeira)
    

 }

menu();