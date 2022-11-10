window.onload=function(){
    //botoes de + e - e botao para pedir
    var minusBtn = document.getElementById("minus"),
        plusBtn = document.getElementById("plus"),
        numberPlace = document.getElementById("numberPlace"),
        submitBtn = document.getElementById("submit"),
        number = 1, /// number value
        min = 1, /// min number
        max = 10, /// max number
        tabela_pedidos_anteriores = document.getElementById("tabela_pedidos_anteriores");


    minusBtn.onclick = function(){
        if (number>min){
           number = number-1; /// Minus 1 of the number
           numberPlace.innerText = number ; /// Display the value in place of the number
           
        }
        if(number == min) {        
            numberPlace.style.color= "red";
            setTimeout(function(){numberPlace.style.color= "black"},500)
        }
        else {
          numberPlace.style.color="black";            
           }
                
    }
    plusBtn.onclick = function(){
        if(number<max){
           number = number+1;
           numberPlace.innerText = number ; /// Display the value in place of the number
        }     
        if(number == max){
               numberPlace.style.color= "red";
               setTimeout(function(){numberPlace.style.color= "black"},500)
        }
           
        else {
               numberPlace.style.color= "black";
               
        }
     
           
    }
    submitBtn.onclick = function(){
        alert("Pediu: " + number + " prato escolhido");
    }

    tabela_pedidos_anteriores.onclick = function(){
        console.log(tabela_pedidos_anteriores);
    }
    
}
/*
window.onload = function(){
    //let table_data = document.getElementById("tabela_pedidos_anteriores").getElementsByTagName("tr");
    //console.log(table_data[0].innerText);
    let arr = []
    for (let i = 0; i < 4; i++){
        arr[i] = document.getElementById("tabela_pedidos_anteriores").getElementsByTagName("tr")[i]
        console.log (document.getElementById("tabela_pedidos_anteriores").getElementsByTagName("tr")[i])
    }
}*/

//console.log(row.getElementsByTagName("td"))