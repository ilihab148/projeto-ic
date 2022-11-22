//window.onload;

const tabela_pratos = document.getElementsByClassName("prato");  //pratos na lista de pedidos anteriores 
const tabela_acompanhamentos = document.getElementsByClassName("acompanhamentos");
const pratos_acompanhamentos_pedidos = {
                                        pratos:[],
                                        acompanhamentos:[]
                                        };

let elementos=window.localStorage.getItem("acompanhamentosSelecionados");
let elementos_read=JSON.parse(elementos);
let rowNumber=0;

console.log(historicRead);


function myFunction(){

}

//emite um alerta na janela, dizendo o prato pedido, guarda o prato no array pratos_pedidos e envia o array pratos_pedidos para o localStorage
function PedidoFeito(prato_pedido,acompanhamento){
    alert ("Pediu: " + prato_pedido.innerHTML + ". Acompanhamentos: " + acompanhamento.innerHTML);
    pratos_acompanhamentos_pedidos.pratos.push(prato_pedido.innerHTML);
    pratos_acompanhamentos_pedidos.acompanhamentos.push(acompanhamento.innerHTML);
    localStorage.setItem("pratos_acompanhamentos_pedidos",JSON.stringify(pratos_acompanhamentos_pedidos));
    }

//muda p pagina de informacoes adicionais
function mudaPInfoAdicionais(prato){
    if(prato.innerHTML=="bitoque"){
        location.href = "bitoqueIA.html";
    }
    else if(prato.innerHTML=="sandes de salmão"){
        location.href = "../html/SandesSalmaoIA.html";
    }
}



function acompanhamentoBonito(elementos_read){
    let string="";
    let string2=""
    for (element in elementos_read){
        if (elementos_read[element]==true){
            console.log("majima")
            if (string==""){
                console.log(string)
                string=element
                console.log(string)
            }
            else{string=string.concat("; ",element)}
        }

    }
    return String(string)
}

addEventListener("load",adicionarRow());