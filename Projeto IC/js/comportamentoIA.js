const FORMULARIO_BITOQUE = "frmAcompanhamentoBitoque";
const FORMULARIO_BIFE = "frmAcompanhamentoBife";
const FORMULARIO_SANDES = "frmAcompanhamentoSandes";
const BOTAO_SELECIONAR = "btnSelecionarTudo";
const BOTAO_DESSELECIONAR = "btnDesselecionarTudo";



let acompanhamentosSelecionadosBitoque = {
    nome:"Bitoque",
    ovo:false,
    arroz:false,
    batata:false,
    salada:false,
    preco:7.50,
};
let acompanhamentosSelecionadosBifeFrango = {
    nome:"Bife de Frango",
    ovo:false,
    arroz:false,
    batata:false,
    salada:false,
    preco:7,
};


const arrayAcompanhamentosSelecionadosBitoque=[];

const arrayAcompanhamentosSelecionadosBifeFrango=[];


const arrayBebidaSelecionada=[
    {   id:0, //Agua
        nome:"Água 33cl",
        preco:1,
        quantidade:0
    },
    {
        id:1, //coca-cola
        nome:"Coca-cola",
        preco:1.50,
        quantidade:0,
    },
    {
        id:2, //Sumo de Laranja do Algarve
        nome:"Sumo de Laranja do Algarve",
        preco:2,
        quantidade:0,
    }
]

const arraySobremesaSelecionada=[
    {   id:0, //Bola
        nome:"Bola de Berlim",
        preco:2.50,
        quantidade:0
    },
    {
        id:1, 
        nome:"Pastel de Nata",
        preco:2.50,
        quantidade:0,
    },
    {
        id:2, 
        nome:"Tarte de Maça",
        preco:3,
        quantidade:0,
    }
]
if ((localStorage.getItem("arrayBebidaSelecionada")) == null){
window.localStorage.setItem("arrayBebidaSelecionada",JSON.stringify(arrayBebidaSelecionada))};
if ((localStorage.getItem("arraySobremesaSelecionada")) == null){
window.localStorage.setItem("arraySobremesaSelecionada",JSON.stringify(arraySobremesaSelecionada))};
if ((localStorage.getItem("arrayAcompanhamentosSelecionadosBitoque")) == null){
window.localStorage.setItem("arrayAcompanhamentosSelecionadosBitoque",JSON.stringify(arrayAcompanhamentosSelecionadosBitoque))};
if ((localStorage.getItem("arrayAcompanhamentosSelecionadosBifeFrango")) == null){
window.localStorage.setItem("arrayAcompanhamentosSelecionadosBifeFrango",JSON.stringify(arrayAcompanhamentosSelecionadosBifeFrango))};
window.onload = main;
function main() {
    formularioBitoque = document.forms[FORMULARIO_BITOQUE];
    formularioBife = document.forms[FORMULARIO_BIFE];
    formularioSandes = document.forms[FORMULARIO_SANDES];
}

function selecionarTudo() {
    let lista = document.getElementsByName("acompanhamento");
    for (let i = 0; i < lista.length; i++) {
        lista[i].checked = true;
    }
    document.getElementById(BOTAO_DESSELECIONAR).disabled = false;
    document.getElementById(BOTAO_SELECIONAR).disabled = true;
}

function desselecionarTudo() {
    let lista = document.getElementsByName("acompanhamento");
    for (let i = 0; i < lista.length; i++) {
        lista[i].checked = false;
    }
    document.getElementById(BOTAO_DESSELECIONAR).disabled = true;
    document.getElementById(BOTAO_SELECIONAR).disabled = false;
}

function aplicarAcompanhamentoBitoque(){
    let lista = document.getElementsByName("acompanhamentoBitoque"); //0-ovo 1-Arroz 2-batata 3-Salada
    acompanhamentosSelecionadosBitoque.ovo=false;
    acompanhamentosSelecionadosBitoque.arroz=false;
    acompanhamentosSelecionadosBitoque.batata=false;
    acompanhamentosSelecionadosBitoque.salada=false;
    for (let i =0;i<lista.length;i++) {
        
        if (lista[i].checked==true){
         console.log(i)

            switch(i){
                case 0:
                    acompanhamentosSelecionadosBitoque.ovo=true;
                    console.log("entrou 0");
                    break;
                    
                case 1:
                    acompanhamentosSelecionadosBitoque.arroz=true;
                    console.log("entrou 1");
                    break;
                case 2:
                    acompanhamentosSelecionadosBitoque.batata=true;
                    console.log("entrou 2");
                    break;
                case 3:
                    acompanhamentosSelecionadosBitoque.salada=true;
                    console.log("entrou 3");
                    break;
            }
        
        }
        
        
    }
    arraydosbitoques=JSON.parse(window.localStorage.getItem("arrayAcompanhamentosSelecionadosBitoque"));
    console.log(arraydosbitoques)
    arraydosbitoques.push(acompanhamentosSelecionadosBitoque);
    window.localStorage.setItem("arrayAcompanhamentosSelecionadosBitoque",JSON.stringify(arraydosbitoques));
;
    

}
function aplicarAcompanhamentoBifeFrango(){
    let lista = document.getElementsByName("acompanhamentoBifeFrango"); //0-ovo 1-Arroz 2-batata 3-Salada
    acompanhamentosSelecionadosBifeFrango.ovo=false;
    acompanhamentosSelecionadosBifeFrango.arroz=false;
    acompanhamentosSelecionadosBifeFrango.batata=false;
    acompanhamentosSelecionadosBifeFrango.salada=false;
    for (let i =0;i<lista.length;i++) {
        
        if (lista[i].checked==true){
         console.log(i)

            switch(i){
                case 0:
                    acompanhamentosSelecionadosBifeFrango.ovo=true;
                    console.log("entrou 0");
                    break;
                    
                case 1:
                    acompanhamentosSelecionadosBifeFrango.arroz=true;
                    console.log("entrou 1");
                    break;
                case 2:
                    acompanhamentosSelecionadosBifeFrango.batata=true;
                    console.log("entrou 2");
                    break;
                case 3:
                    acompanhamentosSelecionadosBifeFrango.salada=true;
                    console.log("entrou 3");
                    break;
            }
        
        }
        
        
    }
    arraydosBifeFrango=JSON.parse(window.localStorage.getItem("arrayAcompanhamentosSelecionadosBifeFrango"));
    console.log(arraydosBifeFrango)
    arraydosBifeFrango.push(acompanhamentosSelecionadosBifeFrango);
    window.localStorage.setItem("arrayAcompanhamentosSelecionadosBifeFrango",JSON.stringify(arraydosBifeFrango));
;
    

}
function adicionarBebidas(id){
   bebida=window.localStorage.getItem("arrayBebidaSelecionada");
   bebidaRead=JSON.parse(bebida);
   let found = bebidaRead.find(bebida => bebida.id === id);
   found.quantidade+=1;
   bebidaRead.id=found;
   window.localStorage.setItem("arrayBebidaSelecionada",JSON.stringify(bebidaRead));


}
function adicionarSobremesas(id){
    sobremesa=window.localStorage.getItem("arraySobremesaSelecionada");
    sobremesaRead=JSON.parse(sobremesa);
    console.log(sobremesaRead);
    let found = sobremesaRead.find(sobremesa => sobremesa.id === id);
    found.quantidade+=1;
    sobremesaRead.id=found;
    window.localStorage.setItem("arraySobremesaSelecionada",JSON.stringify(sobremesaRead));
 
 
 }

    
