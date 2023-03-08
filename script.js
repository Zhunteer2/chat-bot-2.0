function idade() {
    let num1 = document.getElementsByName("idade")[0].value;

    
    if(num1>65){

 res="idoso";
    }
     else if(num1 <18 ){
res="menor";
 }
    else { 
    res="maior";
 
}
    document.getElementsByName("resultado")[0].value = res;
}

function resp4(){

    var fruta = document.getElementById("fruta").value;

    var resp4 ="Que legal! <br> ●Curiosidades da Maçã <br>  ●25% do volume de uma maçã é ar. ...<br>●Uma maçã tem 12 substâncias que previnem e combatem o câncer.<br> ●Além de batizar os computadores mais famosos do mundo, a maçã McIntosh é uma das variedades mais comuns nos lanches escolares dos EUA.<br>"
    var resp5 ="poxa maçã faz tão bem para a sua saude"
    var resp6 ="Não entendi sua resposta"



    if (fruta == "S"||fruta == "s" || fruta == "sim" || fruta == "Sim") {

        document.getElementById("resp4").innerHTML = resp4;}

     
          else if (fruta=="N"|| fruta =="n" || fruta == "não"|| fruta == "Não") {

        document.getElementById("resp4").innerHTML = resp5;
       
    }
    
    else {

        document.getElementById("resp4").innerHTML = resp6;

    }
}