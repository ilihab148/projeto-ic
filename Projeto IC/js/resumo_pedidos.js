let historico=[];   
   function adicionarRowPedidos(){
    let total=0
    let numeroCell=0
    bebida=window.localStorage.getItem("arrayBebidaSelecionada");
    bebidaRead=JSON.parse(bebida);
    let bebidasDisponiveis = bebidaRead.filter(bebida => bebida.quantidade >= 1);
    sobremesa=window.localStorage.getItem("arraySobremesaSelecionada");
    sobremesaRead=JSON.parse(sobremesa);
    let sobremesasDisponiveis= sobremesaRead.filter(sobremesa => sobremesa.quantidade >= 1);
    bitoques=JSON.parse(window.localStorage.getItem("arrayAcompanhamentosSelecionadosBitoque"));
    console.log(bitoques);
    bitoques.forEach(bitoque => {
        let tabela = document.getElementsByClassName("maybe")[0];
        let row = tabela.insertRow(0);
        let cell0 = row.insertCell(0);
        let cell1 = row.insertCell(1);
        let node1 =document.createTextNode(bitoque.nome)
        let node2 =document.createTextNode(bitoque.preco)
        total+=bitoque.preco
        cell0.appendChild(node1);
        cell1.appendChild(node2);
        cell1.classList.add("col");
        cell0.classList.add("col");
        historico.push([bitoque.nome,bitoque.preco])
    });
    bifeFrangos=JSON.parse(window.localStorage.getItem("arrayAcompanhamentosSelecionadosBifeFrango"));
    console.log(bifeFrangos);
    bifeFrangos.forEach(bifeFrango => {
        let tabela = document.getElementsByClassName("maybe")[0];
        let row = tabela.insertRow(0);
        let cell0 = row.insertCell(0);
        let cell1 = row.insertCell(1);
        let node1 =document.createTextNode(bifeFrango.nome)
        let node2 =document.createTextNode(bifeFrango.preco)
        total+=bifeFrango.preco
        cell0.appendChild(node1);
        cell1.appendChild(node2);
        cell1.classList.add("col");
        cell0.classList.add("col");
        historico.push([bifeFrango.nome,bifeFrango.preco])
    });
    
    

    bebidasDisponiveis.forEach(bebida => {
        let tabela = document.getElementsByClassName("maybe")[0];
        let row = tabela.insertRow(0);
        let cell0 = row.insertCell(0);
        let cell1 = row.insertCell(1);
        let node1 =document.createTextNode(bebida.nome.concat(" x "+bebida.quantidade));
        let node2 =document.createTextNode(bebida.preco*bebida.quantidade);
        total+=bebida.preco*bebida.quantidade;
        cell0.appendChild(node1);
        cell1.appendChild(node2);
        cell1.classList.add("col");
        cell0.classList.add("col");
        historico.push([bebida.nome,bebida.quantidade,bebida.preco]);

        
        
    });
    sobremesasDisponiveis.forEach(sobremesa => {
        let tabela = document.getElementsByClassName("maybe")[0];
        let row = tabela.insertRow(0);
        let cell0 = row.insertCell(0);
        let cell1 = row.insertCell(1);
        let node1 =document.createTextNode(sobremesa.nome.concat(" x "+sobremesa.quantidade));
        let node2 =document.createTextNode(sobremesa.preco*sobremesa.quantidade);
        total+=sobremesa.preco*sobremesa.quantidade;
        cell0.appendChild(node1);
        cell1.appendChild(node2);
        cell1.classList.add("col");
        cell0.classList.add("col");

        historico.push([sobremesa.nome,sobremesa.quantidade,sobremesa.preco])
        
    });

    let target =document.getElementById("total");
    let totalNode=document.createTextNode(total);
    target.replaceWith(totalNode);
    console.log(target);
    console.log(total);
    
    
}
function guardar(){
    window.localStorage.setItem("historico",JSON.stringify(historico));
}
