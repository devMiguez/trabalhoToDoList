//ToDo-List
alert("BEM VINDO À SUA ToDO-list")
let lista01 = [];
let resultadoLista01 = "";
let lista02 = [];
let resultadoLista02 = "";
let lixeira = [];
let resultadoLixeira = "";


function menu() {
    let escolha;

    while (escolha != 0) {
        escolha = parseInt(window.prompt(" - Menu - \n1 - Adcionar tarefa\n2 - Ver listas\n3 - Excluir tarefa\n4 - ver lixeira\n5-Buscar tarefa deletada"))

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
            case 5:
                retornaTarefa();
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


function addTarefa() {
    let digiteTarefa;
    let escolhaLista
    
    while (true) {
        escolhaLista = parseInt(prompt("Qual a lista deseja acessar:\n 1 - lista 01\n 2 - lista 02"))
        digiteTarefa = prompt ("digite qual tarefa quer adicionar")
        switch (escolhaLista) {
            case 1:
                lista01.push(digiteTarefa)
                alert("Tarefa adcionada a lista 01!!")
                menu();
                break;

            case 2:
                lista02.push(digiteTarefa)
                alert("Tarefa adcionada a lista 02!!")
                menu();
                break;

            default:
                break;
        }
    }


}

function listaItens() {
    let resultado

     // Limpa a lista resultante ao entrar na função
     resultadoLista01 = "";
     resultadoLista02 = "";

    while (true) {
         resultado = parseInt(prompt("Qual lista você deseja exibir:\n 1 - lista 01\n 2 - lista 02"))
         switch (resultado) {
            case 1:
                for (let i = 0; i < lista01.length; i++) {
                resultadoLista01 = resultadoLista01 + (i + 1) + "-" + lista01[i] + "\n"
            }
            return resultadoLista01;
                

            case 2:    
                for (let i = 0; i < lista02.length; i++) {
                resultadoLista02 = resultadoLista02 + (i + 1) + "-" + lista02[i] + "\n"
            }
            return resultadoLista02;
                
         
            default:
                alert ("escolha uma opção válida!")
                break;
         }
      
}
}

function deletaTarefa() {
    let deletaItem;
    let escolhaItem;

     // Limpa a lista resultante ao entrar na função
     resultadoLista01 = "";
     resultadoLista02 = "";

    deletaItem = parseInt(window.prompt("De qual lista deseja deletar?\n1 - Lista 01\n2 - Lista 02"))

    switch (deletaItem) {
        case 1:
            // Constrói a lista 01 antes de mostrar para o usuário
            for (let i = 0; i < lista01.length; i++) {
                resultadoLista01 += (i + 1) + "-" + lista01[i] + "\n";
            }

            alert(resultadoLista01);
            escolhaItem = parseInt(prompt("Escolha o item que deseja excluir: "));
            if (escolhaItem >= 1 && escolhaItem <= lista01.length) {
                let tarefaRemovida = lista01.splice(escolhaItem - 1, 1)[0];

                // Adiciona a tarefa à lixeira
                lixeira.push(tarefaRemovida);
                alert("Tarefa deletada e movida para a lixeira, meu brother!!");
            } else {
                alert("Insira um item existente!!");
            }
            break;

        case 2:
            // Constrói a lista 02 antes de mostrar para o usuário
            for (let i = 0; i < lista02.length; i++) {
                resultadoLista02 += (i + 1) + "-" + lista02[i] + "\n";
            }

            alert(resultadoLista02);
            escolhaItem = parseInt(prompt("Escolha o item que deseja excluir: "));
            if (escolhaItem >= 1 && escolhaItem <= lista02.length) {
                let tarefaRemovida = lista02.splice(escolhaItem - 1, 1)[0];

                // Adiciona a tarefa à lixeira
                lixeira.push(tarefaRemovida);
            } else {
                alert("Insira um item existente!!");
            }
            break;

        default:
            alert("Insira uma lista válida!!");
            break;
    }

}

function verLixeira() {

    resultadoLixeira = "";

    if((lixeira.length == 0)){
        alert("A lixeira está vazia")
    }else{
        for (let i = 0; i < lixeira.length; i++) {
            resultadoLixeira += (i + 1) + "-" + lixeira[i] + "\n";
        }
        alert("Itens na lixeira:\n" + resultadoLixeira);
    }


}

function retornaTarefa(){
    let escolhaLixeira;
    let escolhaLista;

    if (lixeira.length === 0) {
        alert("A lixeira está vazia");
    } else {
        let lixeiraItens = "";

        for (let i = 0; i < lixeira.length; i++) {
            lixeiraItens += (i + 1) + "-" + lixeira[i] + "\n";
        }

        escolhaLixeira = parseInt(window.prompt("Itens na lixeira:\n" + lixeiraItens + "Escolha o item que deseja retornar à lista: "));

        if (escolhaLixeira >= 1 && escolhaLixeira <= lixeira.length) {
            escolhaLista = parseInt(window.prompt("Qual lista deseja adicionar o item de volta:\n1 - Lista 01\n2 - Lista 02"));

            if (escolhaLista === 1) {
                lista01.push(lixeira.splice(escolhaLixeira - 1, 1)[0]);
                alert("Item retornado à Lista 01!");
            } else if (escolhaLista === 2) {
                lista02.push(lixeira.splice(escolhaLixeira - 1, 1)[0]);
                alert("Item retornado à Lista 02!");
            } else {
                alert("Escolha uma lista válida!");
            }
        } else {
            alert("Escolha um item válido da lixeira!");
        }
    }
}

menu();