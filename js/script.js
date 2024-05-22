//EX 1
function fatorial(){
    num=parseInt(document.getElementById("num").value);
    fat=1;
    i=1;
    while(i<=num){
    fat=fat*i;
    i++;
    }
    document.getElementById("resp").innerHTML=`O fatorial é ${fat}`;
    }

//EX 2  
function calcular(){
    num=parseInt(document.getElementById("numero").value);
    fat=1;
    i=1;
    do{
    fat=fat*i;
    i++;
    }while(i<=num)
    document.getElementById("resposta").innerHTML=`O fatorial é ${fat}`;
    }